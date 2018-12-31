function structFactory(names) {
    var names = names.split(' ');
    var count = names.length;

    function constructor() {
        for (var i = 0; i < count; i++) {
            this[names[i]] = arguments[i];
        }
    }
    return constructor;
}

function string2hex(tmp) {
    var str = '';
    for (var i = 0; i < tmp.length; i++) {
        str += tmp[i].charCodeAt(0).toString(16);
    }
    str ="0x" + str;
    return str;
}

function hex2string(str1) {
    var hex = str1.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}

window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
        } catch (error) {
            console.log(error);
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/8f68025ea6a8425cb75ae44591a8b1b3"));
    }
});

web3.eth.defaultAccount = web3.eth.accounts[0];
var DDNSContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"domain","type":"bytes"},{"name":"topLevel","type":"bytes12"},{"name":"newIp","type":"bytes15"}],"name":"edit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"domain","type":"bytes"},{"name":"topLevel","type":"bytes12"},{"name":"ip","type":"bytes15"}],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"domain","type":"bytes"},{"name":"topLevel","type":"bytes12"}],"name":"renewDomainName","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"domain","type":"bytes"},{"name":"topLevel","type":"bytes12"},{"name":"newOwner","type":"address"}],"name":"transferDomain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"domainName","type":"bytes"},{"indexed":false,"name":"topLevel","type":"bytes12"}],"name":"LogDomainNameRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"domainName","type":"bytes"},{"indexed":false,"name":"topLevel","type":"bytes12"},{"indexed":true,"name":"owner","type":"address"}],"name":"LogDomainNameRenewed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"domainName","type":"bytes"},{"indexed":false,"name":"topLevel","type":"bytes12"},{"indexed":false,"name":"newIp","type":"bytes15"}],"name":"LogDomainNameEdited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"domainName","type":"bytes"},{"indexed":false,"name":"topLevel","type":"bytes12"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"LogDomainNameTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"timestamp","type":"uint256"},{"indexed":true,"name":"_owner","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogPurchaseChangeReturned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"receiptKey","type":"bytes32"},{"indexed":true,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"domainName","type":"bytes"},{"indexed":false,"name":"amountInWei","type":"uint256"},{"indexed":false,"name":"expires","type":"uint256"}],"name":"LogReceipt","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[],"name":"BYTES_DEFAULT_VALUE","outputs":[{"name":"","type":"bytes1"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DN_COST","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DN_COST_SHORT_ADDITION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DN_EXPENSIVE_LENGTH","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DN_MIN_LENGTH","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_EXPIRATION_DATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"domainNames","outputs":[{"name":"name","type":"bytes"},{"name":"topLevel","type":"bytes12"},{"name":"owner","type":"address"},{"name":"ip","type":"bytes15"},{"name":"expires","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"domain","type":"bytes"},{"name":"topLevel","type":"bytes12"}],"name":"getDomainHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"domain","type":"bytes"},{"name":"topLevel","type":"bytes12"}],"name":"getIP","outputs":[{"name":"","type":"bytes15"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"domain","type":"bytes"}],"name":"getPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"receiptKey","type":"bytes32"}],"name":"getReceipt","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"domain","type":"bytes"},{"name":"topLevel","type":"bytes12"}],"name":"getReceiptKey","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReceiptList","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"paymentReceipts","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"receiptDetails","outputs":[{"name":"amountPaidWei","type":"uint256"},{"name":"timestamp","type":"uint256"},{"name":"expires","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TLD_MIN_LENGTH","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}]);
var DDNS = DDNSContract.at('0xbb56f7377956b32b5c61debb58552fb0ebd0ecca');

var DomainNameRegistered = DDNS.LogDomainNameRegistered();
DomainNameRegistered.watch(function(error, result) {
    if (!error) {
        console.log(result);
    } else {
        console.log(error);
    }
});

var DomainNameRenewed = DDNS.LogDomainNameRenewed();
DomainNameRenewed.watch(function(error, result) {
    if (!error) {
        console.log(result);
    } else {
        console.log(error);
    }
});

var DomainNameEdited = DDNS.LogDomainNameEdited();
DomainNameEdited.watch(function(error, result) {
    if (!error) {
        console.log(result);
    } else {
        console.log(error);
    }
});

var DomainNameTransferred = DDNS.LogDomainNameTransferred();
DomainNameTransferred.watch(function(error, result) {
    if (!error) {
        console.log(result);
    } else {
        console.log(error);
    }
});

var PurchaseChangeReturned = DDNS.LogPurchaseChangeReturned();
PurchaseChangeReturned.watch(function(error, result) {
    if (!error) {
        console.log(result);
    } else {
        console.log(error);
    }
});

var LogReceipt = DDNS.LogReceipt();
LogReceipt.watch(function(error, result) {
    if (!error) {
        console.log(result);
    } else {
        console.log(error);
    }
});

$("#formRegisterDomainSubmit").click(function() {
    var dn = $("#formRegisterDomainName").val();
    var tld = $("#formRegisterTLD").val();
    var ip = $("#formRegisterIP").val();

    dn = string2hex(dn);
    tld = string2hex(tld);
    ip = string2hex(ip);

    registerDomain(dn, tld, ip);
});

$("#formChangeIPSubmit").click(function() {
    var dn = $("#formChangeIPDomainName").val();
    var tld = $("#formChangeIPTLD").val();
    var ip = $("#formChangeIPIP").val();

    dn = string2hex(dn);
    tld = string2hex(tld);
    ip = string2hex(ip);

    changeIP(dn, tld, ip);
});

$("#formRenewSubmit").click(function() {
    var dn = $("#formRenewDomainName").val();
    var tld = $("#formRenewTLD").val();

    dn = string2hex(dn);
    tld = string2hex(tld);

    renewDomain(dn, tld);
});

$("#formTransferSubmit").click(function() {
    var dn = $("#formTransferDomainName").val();
    var tld = $("#formTransferTLD").val();
    var add = $("#formTransferNewOwner").val();

    dn = string2hex(dn);
    tld = string2hex(tld);

    transferDomain(dn, tld, add);
});

$("#formGettersGetPrice").click(function() {
    var dn = $("#formGettersDomainName").val();
    var tld = $("#formGettersTLD").val();

    dn = string2hex(dn);
    tld = string2hex(tld);

    getPrice(dn);
});

$("#formGettersGetIP").click(function() {
    var dn = $("#formGettersDomainName").val();
    var tld = $("#formGettersTLD").val();

    dn = string2hex(dn);
    tld = string2hex(tld);

    getIP(dn, tld);
});

$("#formGettersGetDomainHash").click(function() {
    var dn = $("#formGettersDomainName").val();
    var tld = $("#formGettersTLD").val();

    dn = string2hex(dn);
    tld = string2hex(tld);

    getDomainHash(dn, tld);
});

$("#formGettersGetReceiptList").click(function() {
    getReceiptList();
});

$("#formGettersGetReceiptKey").click(function() {
    var dn = $("#formGettersDomainName").val();
    var tld = $("#formGettersTLD").val();

    dn = string2hex(dn);
    tld = string2hex(tld);

    getReceiptKey(dn, tld);
});

function registerDomain(_dn, _tld, _ip) {
    DDNS.unregisterVehicle(_dn, _tld, _ip, function(error, result) {
        if (!error) {
            console.log(result);
        } else
            console.log(error);
    });
};

function changeIP(_dn, _tld, _ip) {
    DDNS.edit(_dn, _tld, _ip, function(error, result) {
        if (!error) {
            console.log(result);
        } else
            console.log(error);
    });
};

function renewDomain(_dn, _tld) {
    DDNS.renewDomainName(_dn, _tld, function(error, result) {
        if (!error) {
            console.log(result);
        } else
            console.log(error);
    });
};

function transferDomain(_dn, _tld, _add) {
    DDNS.transferDomain(_dn, _tld, _add, function(error, result) {
        if (!error) {
            console.log(result);
        } else
            console.log(error);
    });
};

function getPrice(_dn) {
    DDNS.getPrice(_dn, function(error, result) {
        if (!error) {
            console.log(result);
        } else
            console.log(error);
    });
};

function getIP(_dn, _ip) {
    DDNS.getIP(_dn, _ip, function(error, result) {
        if (!error) {
            console.log(result);
        } else
            console.log(error);
    });
};

function getDomainHash(_dn, _ip) {
    DDNS.getDomainHash(_dn, _ip, function(error, result) {
        if (!error) {
            console.log(result);
        } else
            console.log(error);
    });
};

function getReceiptList() {
    DDNS.getReceiptList(function(error, result) {
        if (!error) {
            console.log(result);
        } else
            console.log(error);
    });
};

function getReceiptKey(_dn, _ip) {
    DDNS.getReceiptKey(_dn, _ip, function(error, result) {
        if (!error) {
            alert(result);
        } else
            console.log(error);
    });
};

function getReceipt(_key) {
    DDNS.getReceipt(_key, function(error, result) {
        if (!error) {
            console.log(result);
        } else
            console.log(error);
    });
};