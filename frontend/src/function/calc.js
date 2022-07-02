const calc = (calcMode, calcModeChange, createData, createDataChange, calcData, calcDataChange) => {

    console.log('計算します');
    createDataChange({...createData, ...calcData})
    calcModeChange(true);
}

export default calc;