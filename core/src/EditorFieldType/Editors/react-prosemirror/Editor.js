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
    console.log("ImageResizeView", node, view, getPos);

    const outer = document.createElement("span");
    outer.style.position = "relative";
    outer.style.width = node.attrs.width;
    //outer.style.border = "1px solid blue"
    outer.style.display = "inline-block";
    //outer.style.paddingRight = "0.25em"
    outer.style.lineHeight = "0"; // necessary so the bottom right arrow is aligned nicely

    const img = document.createElement("img");
    img.setAttribute("src", node.attrs.src);
    img.style.width = "100%";
    //img.style.border = "1px solid red"

    const handle = document.createElement("span");
    handle.style.position = "absolute";
    handle.style.bottom = "0px";
    handle.style.right = "0px";
    handle.style.width = "10px";
    handle.style.height = "10px";
    handle.style.border = "3px solid black";
    handle.style.borderTop = "none";
    handle.style.borderLeft = "none";
    handle.style.display = "none";
    handle.style.cursor = "nwse-resize";

    handle.onmousedown = function(e) {
      e.preventDefault();

      const startX = e.pageX;
      const startY = e.pageY;

      const fontSize = parseFloat(getComputedStyle(outer).fontSize);

      const startWidth = parseFloat(node.attrs.width.match(/(.+)em/)[1]);

      const onMouseMove = e => {
        const currentX = e.pageX;
        const currentY = e.pageY;

        const diffInPx = currentX - startX;
        const diffInEm = diffInPx / fontSize;

        outer.style.width = `${startWidth + diffInEm}em`;
      };

      const onMouseUp = e => {
        e.preventDefault();

        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);

        const transaction = view.state.tr
          .setNodeMarkup(getPos(), null, {
            src: node.attrs.src,
            width: outer.style.width
          })
          .setSelection(view.state.selection);

        view.dispatch(transaction);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    outer.appendChild(handle);
    outer.appendChild(img);

    this.dom = outer;
    this.img = img;
    this.handle = handle;
  }

  selectNode() {
    this.img.classList.add("ProseMirror-selectednode");

    this.handle.style.display = "";
  }

  deselectNode() {
    this.img.classList.remove("ProseMirror-selectednode");

    this.handle.style.display = "none";
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
