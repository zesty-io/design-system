import React, { useCallback, useEffect, useRef, useState, useMemo } from "react";

// import { HtmlEditor } from "@aeaton/react-prosemirror";
import { HtmlEditor } from "./react-prosemirror/HtmlEditor";
// import { MenuBar } from "@aeaton/react-prosemirror";
import { MenuBar } from "./react-prosemirror/MenuBar";

import { LinkModal } from "./LinkModal";
import { EmbedModal } from "./EmbedModal";

import { schema } from "./react-prosemirror-schema";
import { plugins } from "./react-prosemirror-plugins";
import { menu } from "./react-prosemirror-menu";

import { ImageResizeView } from "./prosemirror-views/ImageResizeView";
import { IframeResizeView } from "./prosemirror-views/IframeResizeView";
import { VideoResizeView } from "./prosemirror-views/VideoResizeView";

import styles from "./Basic.less";
export function BasicEditor(props) {
  const ref = useRef()

  const [modals, setModals] = useState({
    showLinkModal: false,
    showEmbedModal: false,
    showEmbedModalOptions: {}
  })

  console.log('BasicEditor', modals);

  // only recreate options, which cause prosemirror update,
  // when the version changes. Otherwise prosemirror manages
  // it's own internal document model
  const options = useMemo(() => {
    return { plugins, schema }
  }, [props.version])

  const onModalOpen = (name, options) => {
    console.log('onModalOpen', name);

    // Handle case of rendering multiple editors in a single view.
    // Ensure this components editor isntance is the one which triggered a ProseMirror event
    if (
      ref.current &&
      ref.current.querySelector &&
      ref.current.querySelector(".ProseMirror") == options.view.dom
    ) {
      setModals({
        ...modals,
        [name]: true,
        [`${name}Options`]: options,
      })
    }
  };

  const onModalClose = (name) => {
    setModals({
      ...modals,
      [name]: false
    })
  };

  useEffect(() => {
    zesty.on("PROSEMIRROR_DIALOG_OPEN", onModalOpen);
    zesty.on("PROSEMIRROR_DIALOG_CLOSE", onModalClose);

    return () => {
      zesty.off("PROSEMIRROR_DIALOG_OPEN", onModalOpen);
      zesty.off("PROSEMIRROR_DIALOG_CLOSE", onModalClose);
    }
  }, [ref])

  useEffect(() => {
    console.log('BasicEditor:mounted');
    return () => console.log('BasicEditor:UNMOUNT');
  }, [])

  return (<div className={styles.BasicEditor}>
    <HtmlEditor
      options={options}
      value={props.value}
      version={props.version}
      onChange={props.onChange}
      render={({ editor, view }) => (
        <div>
          <LinkModal view={view} open={modals.showLinks} />
          <EmbedModal
            open={modals.showEmbedModal}
            options={modals.showEmbedModalOptions}
            view={view}
          />
          <MenuBar
            menu={menu({ mediaBrowser: props.mediaBrowser })}
            view={view}
          />
          <div ref={ref}>{editor}</div>
        </div>
      )}
      nodeViews={{
        image(node, view, getPos) {
          return new ImageResizeView(node, view, getPos);
        },
        iframe(node, view, getPos) {
          return new IframeResizeView(node, view, getPos);
        },
        video(node, view, getPos) {
          return new VideoResizeView(node, view, getPos);
        },
      }}
    />
  </div>)
}



// export class BasicEditor extends React.Component {
//   constructor(props) {
//     super(props);

//     this.ref = React.createRef();

//     this.state = {
//       showLinkModal: false,
//       showEmbedModal: false,
//       showEmbedModalOptions: {},
//     };
//   }
//   componentDidMount() {
//     console.log('BasicEditor:mounted');

//     zesty.on("PROSEMIRROR_DIALOG_OPEN", this.onModalOpen);
//     zesty.on("PROSEMIRROR_DIALOG_CLOSE", this.onModalClose);
//   }
//   componentWillUnmount() {
//     console.log('BasicEditor:UNMOUNT');

//     zesty.off("PROSEMIRROR_DIALOG_OPEN", this.onModalOpen);
//     zesty.off("PROSEMIRROR_DIALOG_CLOSE", this.onModalClose);
//   }

//   onModalOpen = (name, options) => {
//     // Handle case of rendering multiple editors in a single view.
//     // Ensure this components editor isntance is the one which triggered a ProseMirror event
//     if (
//       this.ref.current &&
//       this.ref.current.querySelector &&
//       this.ref.current.querySelector(".ProseMirror") == options.view.dom
//     ) {
//       this.setState({
//         [name]: true,
//         [`${name}Options`]: options,
//       });
//     }
//   };

//   onModalClose = (name) => this.setState({ [name]: false });

//   render() {
//     // console.log('Basic:render');

//     return (
//       <div className={styles.BasicEditor}>
//         <HtmlEditor
//           options={{ plugins, schema }}
//           value={this.props.value}
//           version={this.props.version}
//           onChange={this.props.onChange}
//           render={({ editor, view }) => (
//             <div>
//               <LinkModal view={view} open={this.state.showLinkModal} />
//               <EmbedModal
//                 options={this.state.showEmbedModalOptions}
//                 view={view}
//                 open={this.state.showEmbedModal}
//               />

//               <MenuBar
//                 menu={menu({ mediaBrowser: this.props.mediaBrowser })}
//                 view={view}
//               />
//               <div ref={this.ref}>{editor}</div>
//             </div>
//           )}
//           nodeViews={{
//             image(node, view, getPos) {
//               return new ImageResizeView(node, view, getPos);
//             },
//             iframe(node, view, getPos) {
//               return new IframeResizeView(node, view, getPos);
//             },
//             video(node, view, getPos) {
//               return new VideoResizeView(node, view, getPos);
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }
