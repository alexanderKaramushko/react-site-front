import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ThemeAction } from '../../../common';
import { toggleThemeAction } from '../../../actions';

import Header, { ThemeType } from './header.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTheme: (themeName: ThemeType): ThemeAction => dispatch(toggleThemeAction(themeName)),
});

const mapStateToProps = ({ themeReducer }: any) => ({
    themeName: themeReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
