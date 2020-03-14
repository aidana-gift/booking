import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Table = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const markedData = ['2017-11-12','2017-11-16']
  // markedDates= {{
  //   [this.state.markedData]: {selected: true, marked: true},
  //   }}

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {markedData[0] + " " + markedData[1]}
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{markedData}</DropdownItem>
        <DropdownItem> {markedData}</DropdownItem>
        <DropdownItem> {markedData}</DropdownItem>
        {/* <DropdownItem divider /> */}
        <DropdownItem> {markedData}</DropdownItem>
        <DropdownItem> {markedData}</DropdownItem>
        <DropdownItem>{markedData}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Table;