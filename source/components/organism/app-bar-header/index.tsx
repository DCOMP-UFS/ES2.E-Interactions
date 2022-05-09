/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import { Appbar } from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize'

import theme from '@/theme'
import { AntDesign } from '@expo/vector-icons'

import { useDrawer } from '@/context/drawer-context'

type Props = {
  navigation?: any
  back?: any
  options?: any
  [key: string]: any
}

const CustomNavigationBar = ({ navigation, back, options }: Props) => {
  /*   const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)
 */
  const { openDrawer } = useDrawer()

  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.COLORS.TOPBAR,
      }}
    >
      <Appbar.Action
        icon={() => <AntDesign name="menuunfold" size={RFValue(20)} color="white" />}
        onPress={openDrawer}
      />
      <Appbar.Content
        title={options.tabBarLabel}
        titleStyle={{
          textTransform: 'lowercase',
          fontVariant: ['small-caps'],
          fontSize: RFValue(20),
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      />
      <Appbar.Action icon="menu" color="transparent" />
    </Appbar.Header>
  )
}

export default CustomNavigationBar
