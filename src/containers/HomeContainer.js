import { connect } from 'react-redux'
import HomeComponent from '../components/HomeComponent'
import { fetchingItem, addItem, removeItem } from '../store/actions/todoActions'

const mapStateToProps = state => {
    return {
        data: state.todoReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTodo: () => {
            dispatch(fetchingItem())
        },
        add: (item) => {
            dispatch(addItem(item))
        },
        remove: (item) => {
            dispatch(removeItem(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);