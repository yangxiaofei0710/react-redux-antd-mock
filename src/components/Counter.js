import React, { Component } from "react";
import PropTypes from "prop-types";
import "../mock/mock";
import $ from "jquery";
import { Table } from "antd";

class Counter extends Component {

    constructor(props) {
        super (props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
        this.state = {
            userList: "",
        }
    }

    componentDidMount () {
        const _this = this;
        $.ajax({
            url: "setUp.json",
            dataType: "json",
        }).done(function (res) {
            _this.setState({
                userList: res.list
            },() => {
                console.log(_this.state.userList)
            })
        })
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const _this = this;
        const { value, onIncrement, onDecrement } = this.props
        const columns = [{
            title: "姓名",
            dataIndex: "name",
        },{
            title: "年龄",
            dataIndex: "age",
        },{
            title: "邮箱",
            dataIndex: "email",
        }];
        const dataSource = this.state.userList;
        return (

            <div>
                <p>
                    Clicked: {value} times
                    {' '}
                    <button onClick={onIncrement}>
                        +
                    </button>
                    {' '}
                    <button onClick={onDecrement}>
                        -
                    </button>
                    {' '}
                    <button onClick={this.incrementIfOdd}>
                        Increment if odd
                    </button>
                    {' '}
                    <button onClick={this.incrementAsync}>
                        Increment async
                    </button>
                </p>

                <p style={{textAlign: "center",padding: "30px"}}>
                    *****************************************************************************************
                </p>

                <div>
                    <Table columns={columns}  dataSource={dataSource}></Table>
                </div>

            </div>

        )
    }


}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter