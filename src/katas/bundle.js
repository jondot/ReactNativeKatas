
// Katas TOC
//
// This is upside down (imports at the bottom) just so you can
// focus on what matters.
//

const bundle = [
  // flex
  kata(FillAllTest, FillAll),
  kata(DirectionTest, Direction),
  kata(AlignmentAxisTest, AlignmentAxis),
  kata(AlignmentTest, Alignment),
  kata(FlexSizeTest, FlexSize),
  kata(GriddingTest, Gridding),
  kata(LoadingCardTest, LoadingCard),

  // styling
  kata(UsingStylesTest, UsingStyles),
  kata(UsingTextTest, UsingText),
  kata(BorderRadiusTest, BorderRadius),
  kata(ClippingTest, Clipping),

  // composing
  kata(ContactCardTest, ContactCard),
  kata(ProfileScreenTest, ProfileScreen),
  kata(CalendarMonthTest, CalendarMonth),
  kata(SimpleChartTest, SimpleChart),
]




export default bundle

import {kata } from '@/runner'

// flex
import {FillAllTest, FillAll} from './flex/FillAll'
import {AlignmentTest, Alignment} from './flex/Alignment'
import {AlignmentAxisTest, AlignmentAxis} from './flex/AlignmentAxis'
import {DirectionTest, Direction} from './flex/Direction'
import {LoadingCardTest, LoadingCard} from './flex/LoadingCard'
import {FlexSizeTest, FlexSize} from './flex/FlexSize'
import {GriddingTest, Gridding} from './flex/Gridding'

// styling
import {UsingStylesTest, UsingStyles} from './styling/UsingStyles'
import {UsingTextTest, UsingText} from './styling/UsingText'
import {BorderRadiusTest, BorderRadius} from './styling/BorderRadius'
import {ClippingTest, Clipping} from './styling/Clipping'

//composing
import {ContactCardTest, ContactCard} from './composing/ContactCard'
import {ProfileScreenTest, ProfileScreen} from './composing/ProfileScreen'
import {CalendarMonthTest, CalendarMonth} from './composing/CalendarMonth'
import {SimpleChartTest, SimpleChart} from './composing/SimpleChart'

