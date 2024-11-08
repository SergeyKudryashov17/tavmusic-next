import { Checkbox, CheckboxProps, ConfigProvider } from "antd";

export const CheckboxInput = ({ ...props }: CheckboxProps) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF181F',
                    colorPrimaryHover: 'var(--accent-color)',
                    colorPrimaryBorder: 'var(--light-accent-color)'
                },
            }}
        >
            <Checkbox {...props}>
                { props.children }
            </Checkbox>
        </ConfigProvider>
    )
}