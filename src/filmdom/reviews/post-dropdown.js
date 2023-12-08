import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {IoIosMore} from "react-icons/io";


const ReviewDropdownMenu = ({ isPostOwner, onDeletePost}) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<Dropdown isOpen={dropdownOpen} toggle={toggle}>
			<DropdownToggle caret>
				<IoIosMore />
			</DropdownToggle>
			<DropdownMenu>
				{isPostOwner && (
					<DropdownItem onClick={onDeletePost}>Delete Post</DropdownItem>
				)}
      		</DropdownMenu>

		</Dropdown>
	)
};

export default DropdownMenu;