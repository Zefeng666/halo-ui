import React from "react";
import { fireEvent, render } from '@testing-library/react'
import Alert from "./alert";

describe('test alert component', () => {
    it('should render the current default alert', () => {
        const wrapper = render(<Alert title={'hello~'}/>);
        const element = wrapper.getByText('hello~');
        // 元素存在
        expect(element).toBeTruthy();
        // 元素已经被渲染出来了
        expect(element).toBeInTheDocument();
        // 元素拥有btn的class
        expect(element).toHaveClass('alert-title');
    })
})
