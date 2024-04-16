import { CSSProperties } from "vue";
let light = '#fff';
let dark = '#000';
const headerStyle: CSSProperties = {
    textAlign: 'center',
    height: 64,
    paddingInline: 50,
    padding:0,
    lineHeight: '64px',
    backgroundColor: light,
};

const contentStyle: CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: dark,
    backgroundColor: light,
};

const siderStyle: CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: dark,
    backgroundColor: light,
};

const footerStyle: CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: light,
};

/* 暴露layout组件的默认样式 */
export {
    headerStyle,
    contentStyle,
    siderStyle,
    footerStyle
}