for(let i = 0; i < 100; i++){
    eth.sendTransaction({
        from: eth.accounts[0],
        to: "0xceee57f2b700c2f37d1476a7974965e149fce2d4", 
        value: "74000000000000000"})
}
