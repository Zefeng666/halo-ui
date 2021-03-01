import React from "react";
import {fireEvent, render, RenderResult,cleanup} from "@testing-library/react";
import Menu,{MenuProps} from "./Menu";
import MenuItem from "./MenuItem";

const testProps:MenuProps = {
    defaultIndex:"0",
    onSelect:jest.fn(),
    className:'test'
}

const testVerProps:MenuProps = {
    defaultIndex: "0",
    mode: 'vertical',
}

const generateMenu = (props: MenuProps)=>{
    return (<Menu {...props}>
        <MenuItem>
            active
        </MenuItem>
        <MenuItem disabled >
            disabled
        </MenuItem>
        <MenuItem >
            xyz
        </MenuItem>
    </Menu>)
}

let wrapper:RenderResult, menuElement:HTMLElement, activeElement:HTMLElement, disabledElement:HTMLElement

describe('test Menu and MenuItem  component',()=>{
    beforeEach(()=>{
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId("test-menu");
        activeElement = wrapper.getByText("active");
        disabledElement = wrapper.getByText("disabled")
    })
    it('should render correct Menu and MenuItem based on default props ', function () {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('menu test')
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    });
    it('click items should change active and call the right callback', function () {
        const thirdItem = wrapper.getByText("xyz");
        fireEvent.click(thirdItem);
        expect(thirdItem).toHaveClass('is-active');
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith("2");
        fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toBeCalledWith("2")
    });
    it('should render vertical mode when mode is set to vertical  ', function () {
        cleanup();
        const wrapper = render(generateMenu(testVerProps));
        const menuElement = wrapper.getByTestId("test-menu")
        expect(menuElement).toHaveClass("menu-vertical")
    });
})