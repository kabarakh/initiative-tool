import fontawesome from '@fortawesome/fontawesome'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faAngleDoubleLeft from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
import faSave from '@fortawesome/fontawesome-free-solid/faSave'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'

const iconList = [
  faAngleDoubleLeft, faAngleDoubleRight, faPlus, faCheckSquare, faPlay, faSave, faTimes
]

export default {
  addIcons: () => {
    iconList.forEach((icon) => {
      fontawesome.library.add(icon)
    })
  }
}