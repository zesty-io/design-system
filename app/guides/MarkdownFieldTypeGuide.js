// import React, { Component } from 'react'
//
// import { CodeCard } from '../components/CodeCard'
// import { MarkdownFieldType } from '@zesty-io/core/dist/MarkdownFieldType'
//
// export class MarkdownFieldTypeGuide extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <p>
//           Markdown FieldType allows a user to write markdown, and preview it
//         </p>
//         <MarkdownFieldType
//           default={`# Level 1 Header (H1)
// ## Level 2 Header (H2)
// ##### Level 5 Header (H5)`}
//         />
//         <CodeCard header="Usage" height={150} open>
//           {`<MarkdownFieldType
//   default={'# Level 1 Header (H1)
//   ## Level 2 Header (H2)
//   ##### Level 5 Header (H5)'}
//     />`}
//         </CodeCard>
//         <CodeCard header="Code" height={550}>
//           {`export class MarkdownFieldType extends Component {
//   state = {
//     view: "editor",
//     content: this.props.default || ""
//   };
//   handleUpdate = evt => {
//     if (this.props.callback) {
//       this.props.callback(evt.target.value);
//     }
//     this.setState({ content: evt.target.value });
//   };
//   changeTab = evt => {
//     this.setState({ view: evt.target.name });
//   };
//   render() {
//     return (
//       <Card className={styles.MarkdownFieldType}>
//         <CardHeader>
//           <ButtonGroup className={styles.Tabs}>
//             <Button
//               onClick={this.changeTab}
//               type={this.state.view !== "editor" ? "cancel" : ""}
//               name="editor"
//               text="Editor"
//             />
//             <Button
//               onClick={this.changeTab}
//               type={this.state.view !== "output" ? "cancel" : ""}
//               name="output"
//               text="View Output"
//             />
//             <Button
//               onClick={this.changeTab}
//               type={this.state.view !== "help" ? "cancel" : ""}
//               name="help"
//               text="Help"
//             />
//           </ButtonGroup>
//         </CardHeader>
//         <CardContent className={styles.Content}>
//           {this.state.view === "editor" ? (
//             <textarea
//               className={styles.TextInput}
//               onChange={this.handleUpdate}
//               value={this.state.content}
//             />
//           ) : this.state.view === "help" ? (
//             <section className={styles.Help}>
//               <textarea
//                 className={styles.TextInput}
//                 value={markdownHelp}
//                 readOnly
//               />
//               <article className={styles.HelpOutput}>
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: marked(markdownHelp)
//                   }}
//                 />
//               </article>
//             </section>
//           ) : (
//             <article className={styles.Output}>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: marked(this.state.content)
//                 }}
//               />
//             </article>
//           )}
//         </CardContent>
//       </Card>
//     );
//   }
// }`}
//         </CodeCard>
//       </React.Fragment>
//     )
//   }
// }
