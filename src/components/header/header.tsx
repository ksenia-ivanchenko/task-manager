import { FC, useState } from "react";
import {
    MdAddTask,
    MdAccountCircle,
    MdOutlineChecklist,
    MdSearch,
} from "react-icons/md";
import {
    DropdownItem,
    DropdownMenu,
    HeaderContainer,
    IconWrapper,
    Logo,
    ProfileIconContainer,
    SearchWrapper,
} from "./style";
import { Button, Input } from "../ui";
import { COLORS } from "../ui/constants";

export const Header: FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMouseEnter = () => setMenuOpen(true);
    const handleMouseLeave = () => setMenuOpen(false);

    return (
        <HeaderContainer>
            <Logo>
                <MdOutlineChecklist style={{ color: COLORS.MAIN_DARK }} />
                <span>MyTasks</span>
            </Logo>

            <SearchWrapper noValidate>
                <Input type="text" label="Найти задачу" />
                <Button
                    variant="icon"
                    style={{
                        position: "relative",
                        right: "50px",
                    }}
                >
                    <MdSearch
                        size={25}
                        style={{
                            color: COLORS.MAIN_DARK,
                        }}
                    />
                </Button>
            </SearchWrapper>

            <IconWrapper>
                <Button variant="icon">
                    <MdAddTask size={25} style={{ color: COLORS.MAIN_DARK }} />
                </Button>
                <ProfileIconContainer
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Button variant="icon">
                        <MdAccountCircle
                            size={25}
                            style={{ color: COLORS.MAIN_DARK }}
                        />
                    </Button>
                    <DropdownMenu $show={isMenuOpen}>
                        <DropdownItem>Редактировать</DropdownItem>
                        <DropdownItem>Выйти</DropdownItem>
                    </DropdownMenu>
                </ProfileIconContainer>
            </IconWrapper>
        </HeaderContainer>
    );
};
