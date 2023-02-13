import { DeleteFilled } from "@ant-design/icons"
import { Button, Card, Col, Row, Input, Modal } from "antd"
import { useEffect, useState } from "react";
import handleSubmit from "./handles/handlesubmit";
import "./TaskDashboard.scss";

const { TextArea } = Input;
export const TaskDashboard = (props) => {
    const defaultTasksList = window.localStorage.getItem("TASKS_LIST");
    const [tasksList, setTasksList] = useState(defaultTasksList?.split(',') || []);
    const [inputStr, setInputStr] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteTask = (task, idx) => {
        const modList = tasksList.filter((item, i) => i !== idx)
        setTasksList(modList);
    }

    useEffect(() => {
        if (tasksList?.length > 0) {
            window.localStorage.setItem("TASKS_LIST", tasksList);
        } else {
            window.localStorage.removeItem("TASKS_LIST")
        }
    }, [tasksList])

    const handleAddTask = (inputStr) => {
        if (inputStr.trim().length > 0) {
            setTasksList((prev) => {
                return [...prev, inputStr]
            })

            handleSubmit(inputStr)

            setIsModalOpen(false);
            setInputStr('');
        } else {
            setInputStr('');
            setIsModalOpen(false);
        }
    }

    const handleCancel = () => {
        setInputStr('')
        setIsModalOpen(false);
    }

    return (
        <Row className="dashboardRow">
            {
                tasksList?.length > 0 && tasksList?.map((task, idx) => (
                    <Col key={idx}>
                        <Card className="taskCard" title={'Task'} extra={<DeleteFilled title="Delete task" onClick={() => handleDeleteTask(task, idx)} />}>
                            <p>{task}</p>
                        </Card>
                    </Col>
                ))
            }
            <Button onClick={() => setIsModalOpen(true)}>Add Task</Button>
            <Modal title="Add Task" open={isModalOpen} onOk={() => handleAddTask(inputStr)} onCancel={() => handleCancel()}>
                <label>Task description</label>
                <TextArea rows={4} onChange={(e) => setInputStr(e.target.value)} value={inputStr} />
            </Modal>
        </Row>
    )
}