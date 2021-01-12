import React from "react";
import {fireEvent, render} from '@testing-library/react'
import Button, {ButtonProps, ButtonSize, ButtonType,} from "./button";

const caseProps1:ButtonProps = {
    onClick: jest.fn()
}

const caseProps2:ButtonProps = {
    btnType:ButtonType.Primary,
    size:ButtonSize.Small,
    className: 'mockclass',
}

const disabledProps:ButtonProps = {
    disabled:true,
    onClick:jest.fn()
}

describe('test button component',()=>{
    it('should render the current default button', function () {
        const wrapper = render(<Button {...caseProps1}>Nice</Button>)
        const element = wrapper.getByText('Nice');
        //元素存在
        expect(element).toBeTruthy();
        //元素已经被渲染出来了
        expect(element).toBeInTheDocument()
        //元素的HTML类型是BUTTON
        expect(element?.tagName).toEqual('BUTTON')
        //元素拥有btn btn-default这样的属性
        expect(element).toHaveClass('btn btn-default')
        //模拟用户点击
        fireEvent.click(element);
        //onClick函数应该被点击到了
        expect(caseProps1.onClick).toHaveBeenCalled();
    });
    it('should render the correct component based on different props',()=>{
        const wrapper = render(<Button {...caseProps2}>HelloWorld</Button>)
        const element = wrapper.getByText('HelloWorld')
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn btn-primary btn-sm mockclass')
    })
    it('should render a link when btnType equals link and href is provided', function () {
        const wrapper = render(<Button btnType={ButtonType.Link} href={"http://halo.com"}>Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element?.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    });
    it('should render disabled button when disabled set to true', function () {
        const wrapper = render(<Button {...disabledProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element);
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    });

})

