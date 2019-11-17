import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import SECTION_DATA from './sections.data';
import './directory.styles.scss'

class Directory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sections: SECTION_DATA
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, imageUrl, title, size, linkUrl}) => (
                         <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                    ))
                }
            </div>
        )
    }

}

export default Directory;