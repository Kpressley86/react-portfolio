import React from 'react';
import MetisMenu from 'react-metismenu';
import './SideNav.css';

const menu1 = [
    {
        id: 1,
        label: '💬 About',
        to: '#About',
    },
    {
        id: 2,
        label: '💻 Portfolio',
        to: '#Portfolio',
    },
    {
        id: 3,
        label: '🗎 Resume',
        to: '#Resume',
    },
    {
        id: 4,
        label: '📱 Contact',
        to: '#Contact',
    },
];

class SideNav extends React.Component {
    constructor() {
        super();

        this.state = {
            menu: menu1,
        };
    }
    render() {
        return (
            <div>
                <MetisMenu
                    ref={(r) => { this.menu = r; }}
                    activeLinkFromLocation
                    activeLinkLabel={this.state.activeLinkLabel}
                    activeLinkId={this.state.activeLinkId}
                    classNameItemHasVisibleChild="open"
                    className="menu"
                    onSelected={(e) => {
                        // e.preventDefault();
                        // console.log('onSelected', e);
                    }}
                    content={this.state.menu} />

            </div>

        );
    }
}

export default SideNav;