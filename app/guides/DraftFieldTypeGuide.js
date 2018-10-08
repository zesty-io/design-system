// import React, { Component } from 'react'
//
// import { DraftFieldType } from '@zesty-io/core/dist/DraftFieldType'
// import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
// import GithubEmbed from '../components/githubembed'
//
// export class DraftFieldTypeGuide extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <p>
//           A WYSIWYG{' '}
//           <a href="https://jpuri.github.io/react-draft-wysiwyg/#/">
//             (Draft.js)
//           </a>{' '}
//           component
//         </p>
//         <br />
//         <DraftFieldType />
//         <br />
//         <br />
//         <CollapsibleCard header="Usage" open>
//           <GithubEmbed height="50px" code="<DraftFieldType />" />
//         </CollapsibleCard>
//         <CollapsibleCard collapsed header="Code">
//           <GithubEmbed
//             code={`
// export class DraftFieldType extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       editorState: EditorState.createEmpty()
//     }
//   }
//
//   onEditorStateChange = editorState => {
//     this.setState({
//       editorState
//     })
//   }
//
//   render() {
//     const { editorState } = this.state
//     return (
//       <Editor
//         initialEditorState={editorState}
//         toolbarClassName="toolbarClassName"
//         wrapperClassName="wrapperClassName"
//         editorClassName="editorClassName"
//         onEditorStateChange={this.onEditorStateChange}
//       />
//     )
//   }
// }`}
//           />
//         </CollapsibleCard>
//       </React.Fragment>
//     )
//   }
// }
