import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from './actions';

import AppView from './views/app';

const mapStateToProps = state => ({
    'comments': state.comments,
    'posts': state.posts
});

const mapDispachToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(AppView);
