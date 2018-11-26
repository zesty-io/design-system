import React from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import "prosemirror-view/style/prosemirror.css";
import "./Editor.less";

/**
@see https://prosemirror.net/docs/guide/#view.node_views
@see https://glitch.com/edit/#!/toothsome-shoemaker
**/
class ImageResizeView {
  constructor(node, view, getPos) {
    // console.log("ImageResizeView", node, view, getPos);

    this.node = node;
    this.outerView = view;
    this.getPos = getPos;

    const figure = document.createElement("figure");
    figure.style.position = "relative";
    figure.style.width = node.attrs.width;
    figure.style.height = node.attrs.height;
    //figure.style.border = "1px solid blue"
    figure.style.display = "inline-block";
    //figure.style.paddingRight = "0.25em"
    figure.style.lineHeight = "0"; // necessary so the bottom right arrow is aligned nicely

    const img = document.createElement("img");
    img.setAttribute("src", node.attrs.src);
    img.setAttribute("width", node.attrs.width);
    img.setAttribute("height", node.attrs.height);

    // Lets the image expand when dragging the handle
    img.style.width = "100%";
    img.style.height = "100%";
    //img.style.border = "1px solid red"

    figure.appendChild(img);

    this.dom = figure;
    this.img = img;
    this.handle = this.addHandle();
  }

  selectNode() {
    this.img.classList.add("ProseMirror-selectednode");
    // this.handle.style.display = "";
  }

  deselectNode() {
    this.img.classList.remove("ProseMirror-selectednode");
    // this.handle.style.display = "none";
  }

  addHandle() {
    const handle = document.createElement("span");
    handle.style.position = "absolute";
    handle.style.bottom = "0px";
    handle.style.right = "0px";
    handle.style.width = "10px";
    handle.style.height = "10px";
    handle.style.border = "3px solid orange";
    handle.style.borderTop = "none";
    handle.style.borderLeft = "none";
    // handle.style.display = "none";
    handle.style.cursor = "nwse-resize";

    handle.onmousedown = e => {
      e.preventDefault();

      const startX = e.pageX;
      const startY = e.pageY;
      const startWidth = this.dom.offsetWidth;
      const startHeight = this.dom.offsetHeight;

      const onMouseMove = e => {
        const currentX = e.pageX;
        const currentY = e.pageY;

        const endWidth = startWidth + (currentX - startX);
        const endHeight = startHeight + (currentY - startY);

        this.dom.style.width = `${endWidth}px`;
        this.dom.style.height = `${endHeight}px`;
      };

      const onMouseUp = e => {
        e.preventDefault();

        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);

        console.log("ZUID", this.node.attrs["data-zuid"]);

        let url = this.node.attrs.src;
        if (this.node.attrs["data-zuid"]) {
          // TODO make API call to cut new image
          url = `${CONFIG.service.media_resolver}/resolve/${
            this.node.attrs["data-zuid"]
          }/getimage/?w=${this.dom.style.width}&h=${this.dom.style.height}`;
        }

        const transaction = this.outerView.state.tr
          .setNodeMarkup(this.getPos(), null, {
            // src: this.node.attrs.src,
            src: url,
            width: this.dom.style.width,
            height: this.dom.style.height
          })
          .setSelection(this.outerView.state.selection);

        this.outerView.dispatch(transaction);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    this.dom.appendChild(handle);

    return handle;
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);

    console.log("Editor", this);

    this.state = {
      state: EditorState.create(props.options),
      nodeViews: {
        resizableImage(node, view, getPos) {
          return new ImageResizeView(node, view, getPos);
        }
      }
    };
  }

  createEditorView = node => {
    if (!this.view) {
      this.view = new EditorView(node, {
        state: this.state.state,
        dispatchTransaction: this.dispatchTransaction,
        attributes: {
          placeholder: this.props.placeholder
        },
        nodeViews: this.state.nodeViews
      });

      if (this.props.autoFocus) {
        this.view.focus();
      }
    }
  };

  dispatchTransaction = transaction => {
    const state = this.view.state.apply(transaction);
    this.view.updateState(state);
    this.setState({ state });
    this.props.onChange(state.doc.content);
  };

  render() {
    const editor = <div ref={this.createEditorView} />;

    return this.props.render
      ? this.props.render({
          state: this.state.state,
          dispatch: this.dispatchTransaction,
          view: this.view,
          editor
        })
      : editor;
  }
}

export default Editor;
