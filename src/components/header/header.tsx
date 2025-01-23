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
import { useDispatch } from "../../store";
import { createTask, logOut } from "../../store/slices";
import { TaskForm } from "../../components";
import { Modal } from "../modal";
import { TCreateTaskData } from "../../services/types";

export const Header: FC = () => {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleProfileMouseEnter = () => setProfileMenuOpen(true);
    const handleProfileMouseLeave = () => setProfileMenuOpen(false);

    const searchTask = (e) => {
        e.preventDefault();
        // логика поиска задачи
    };

    const handleAddNewTask = async (data: TCreateTaskData) => {
        await dispatch(
            createTask({
                title: data.title,
                description: data.description,
                board_id: data.board_id,
                deadline: data.deadline,
            })
        );
        setShowModal(false);
    };

    return (
        <HeaderContainer>
            <Logo>
                <MdOutlineChecklist style={{ color: COLORS.MAIN_DARK }} />
                <span>MyTasks</span>
            </Logo>

            <SearchWrapper noValidate onSubmit={searchTask}>
                <Input type="text" label="Найти задачу" />
                <Button
                    variant="icon"
                    nohover
                    style={{
                        position: "relative",
                        right: "50px",
                    }}
                    type="submit"
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
                <Button variant="icon" onClick={() => setShowModal(true)}>
                    <MdAddTask size={25} style={{ color: COLORS.MAIN_DARK }} />
                </Button>

                <ProfileIconContainer onMouseLeave={handleProfileMouseLeave}>
                    <Button
                        variant="icon"
                        onMouseEnter={handleProfileMouseEnter}
                    >
                        <MdAccountCircle
                            size={25}
                            style={{ color: COLORS.MAIN_DARK }}
                        />
                    </Button>
                    <DropdownMenu $show={isProfileMenuOpen}>
                        <DropdownItem disabled={!isProfileMenuOpen}>
                            Редактировать
                        </DropdownItem>
                        <DropdownItem
                            disabled={!isProfileMenuOpen}
                            onClick={() => dispatch(logOut())}
                        >
                            Выйти
                        </DropdownItem>
                    </DropdownMenu>
                </ProfileIconContainer>
            </IconWrapper>
            {showModal && (
                <Modal
                    title="Добавить задачу"
                    onClose={() => setShowModal(false)}
                >
                    <TaskForm onSubmit={handleAddNewTask} />
                </Modal>
            )}
        </HeaderContainer>
    );
};
