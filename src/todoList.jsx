import React, { Component } from 'react';
import { Button, Input, List } from 'antd';
import { getInputChangeAction, getAddListAction, getDelsrowAction } from './store/actionCreators'
import store from './store'

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState();

        // subscribe 帮助我们订阅 store 的改变
        store.subscribe(() => {
            // 帮我们湖区 store 中的内容
            this.setState(store.getState())
        });
    }

    render() {
        return <div>
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <Input onChange={e => this.valueChange(e)} value={this.state.inputVal} placeholder="Basic usage" style={{ width: '300px' }} />
                <Button onClick={e => this.addList(e)} type="primary">Primary</Button>
            </div>
            <List
                style={{ width: '300px', marginTop: '10px', marginLeft: '10px' }}
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={this.state.list}
                renderItem={(item, index) => (<List.Item onClick={e => this.delsrow(e, index)}>{item} -- <span className="iconfont icon-shanchu"></span></List.Item>)}
            />
        </div>
    }

    // 获取输入框的值
    valueChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)

        // dispatch -- 帮助我们派发 store
        store.dispatch(action)
    }

    // 将输入框的值输出到按钮
    addList() {
        // const action = {
        //     type: ADD_LIST
        // }

        const action = getAddListAction()

        store.dispatch(action)
    }

    // 删除每一行
    delsrow(e, index) {
        // const action = {
        //     type: DELS_ROW,
        //     index: index
        // }

        const action = getDelsrowAction(index)

        store.dispatch(action)
    }
}