import React, { Component } from 'react'
import { Menu, Dropdown, Segment } from 'semantic-ui-react'
import Link from 'next/link';

export class MenuTopNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className = "MenuDivContainer">
        <Menu className="MenuBar" pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          > <Link href="/"> Home </Link></Menu.Item>
          <Menu.Item
            name='shop'
            active={activeItem === 'shop'}
            onClick={this.handleItemClick}>
                <Dropdown text='Shop'pointing='top'  icon='none' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item className="DropdownItem"><Link href="/">Shop All</Link></Dropdown.Item>
                        <Dropdown.Item className="DropdownItem"><Link href="/category/Mugs">Mugs</Link></Dropdown.Item>
                        <Dropdown.Item className="DropdownItem"><Link href="/category/Plates">Plates</Link></Dropdown.Item>
                        <Dropdown.Item className="DropdownItem"><Link href="/category/Bowls">Bowls</Link></Dropdown.Item>
                        <Dropdown.Item className="DropdownItem"><Link href="/category/Furniture">Furniture</Link></Dropdown.Item>
                        <Dropdown.Divider className="DropdownItem"/>
                        <Dropdown.Item className="DropdownItem"><Link href="/category/Sale">Sale</Link></Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
            </Menu.Item>
      
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
  
          ><Link href="/about"> About </Link></Menu.Item> 
        </Menu>

        <Segment>
        </Segment>
      </div>
    )
  }
}


