import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ThemeAction } from '../../../common';
import { toggleThemeAction } from '../../../actions';

import Header from './header.component';
import { ThemeType } from '../../../common/settings';
import { RootState } from '../../../reducers';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTheme: (themeName: ThemeType): ThemeAction => dispatch(toggleThemeAction(themeName)),
});

const mapStateToProps = (state: RootState) => ({
    themeName: state.settingsReducer.themeName,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
