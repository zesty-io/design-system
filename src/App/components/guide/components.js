import ButtonGuide from '../../../../core/Button/guide'
import ButtonGroupGuide from '../../../../core/ButtonGroup/guide'
import CardGuide from '../../../../core/Card/guide'
import DividerGuide from '../../../../core/Divider/guide'
import Loader from '../../../../core/Loader'
import SearchGuide from '../../../../core/Search/guide'
import SelectGuide from '../../../../core/Select/guide'
import InputGuide from '../../../../core/input/guide'
import ToggleGuide from '../../../../core/Toggle/guide'
import InfotipGuide from '../../../../core/Infotip/guide'

// these require router to function properly
import Url from '../../../../core/Url'
import AppLink from '../../../../core/AppLink'
// may take some fancy timeout magic to show this off
import WithLoader from '../../../../core/WithLoader'

const components = {
  Button: {
    component: ButtonGuide,
    description:
      'A flexible button component with styles including warn, cancel, and save'
  },
  ButtonGroup: {
    component: ButtonGroupGuide,
    description: 'A wrapper to group buttons'
  },
  Card: {
    component: CardGuide,
    description:
      'Cards are universal use display components, they respond well to grid and flex systems that have their boundaries clearly drawn.'
  },
  Divider: {
    component: DividerGuide,
    description: 'A styled horizontal divider'
  },
  Loader: { component: Loader, description: 'A general loading indicator for inline use' },
  Search: {
    component: SearchGuide,
    description: 'A search component that takes onKeyup and onClick props'
  },
  Select: {
    component: SelectGuide,
    description:
      'The Select component requires that you also import the Option component to nest inside of it for each option. It takes an onSelect prop.'
  },
  Input: { component: InputGuide, description: 'A general use text input' },
  Toggle: {
    component: ToggleGuide,
    description: 'A toggle component that works as a checkbox'
  },
  Infotip: {
    component: InfotipGuide,
    description: 'Mouseover for more information'
  }
}

export default components