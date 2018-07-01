export { Button } from "./Button";
// export {default as ButtonGroup} from './ButtonGroup/ButtonGroup'

// import React from "react";
// // import btnStyles from "./Button/Button.less";
// // import btnGrpStyles from "./ButtonGroup/ButtonGroup.less";
// import cx from "classnames";

// export function Button(props) {
//   return (
//     <button
//       {...props}
//       // className={cx(btnStyles.button, props.className, btnStyles[props.type])}
//       className={cx('core-btn', `core-btn-${props.type}`, props.className,)}
//     >
//       {props.text}
//       {React.Children.map(
//         React.Children.toArray(props.children),
//         (child, i) => {
//           // If the first child is an element
//           // assume it's an icon
//           if (child.props && i === 0) {
//             return React.cloneElement(child, {
//               className: cx(btnStyles.icon, child.props.className)
//             });
//           } else {
//             // probably just a text node
//             return child;
//           }
//         }
//       )}
//     </button>
//   );
// }

// export function ButtonGroup(props) {
//   let opts = {
//     className: cx(btnGrpStyles.ButtonGroup, props.className)
//   };
//   return (
//     <div {...opts}>
//       {React.Children.map(props.children, child => {
//         if (child) {
//           return React.cloneElement(child, {
//             className: cx(btnGrpStyles.child, child.props.className)
//           });
//         }
//       })}
//     </div>
//   );
// }

// import Button from './Button'
// import ButtonGroup from './ButtonGroup'
// import { Card, CardHeader, CardContent, CardFooter } from './Card'
// import Divider from './Divider'
// import Url from './Url'
// import AppLink from './AppLink'
// import Loader from './Loader'
// import WithLoader from './WithLoader'
// import Search from './Search'
// import { Select, Option } from './Select'
// // import { Option } from './Select'
// import Input from './Input'
// import Toggle from './Toggle'
// import Infotip from './Infotip'

// export {
//   Button,
//   ButtonGroup,
//   Card, CardHeader, CardContent, CardFooter,
//   Divider,
//   Url,
//   AppLink,
//   Loader,
//   WithLoader,
//   Search,
//   Select,
//   Option,
//   Input,
//   Toggle,
//   Infotip
// }
