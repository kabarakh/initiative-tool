import fontawesome from '@fortawesome/fontawesome'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'
import faSave from '@fortawesome/fontawesome-free-solid/faSave'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faAngleDoubleLeft from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faSyncAlt from '@fortawesome/fontawesome-free-solid/faSyncAlt'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'

const iconList = [
  faAngleDoubleLeft, faAngleDoubleRight, faPlus, faCheckSquare, faSave, faArrowLeft, faTimes, faSyncAlt, faTrashAlt
]

export default {
  addIcons: () => {
    iconList.forEach((icon) => {
      fontawesome.library.add(icon)
    })
  }
}