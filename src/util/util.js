export function handleMouseEnter() {
    // console.log('cursor-circle:',document.getElementsByClassName('cursor-circle')[0])
    if (document.getElementsByClassName('cursor-circle')[0]) {
        document.getElementsByClassName('cursor-circle')[0].classList.add('cursor-circle-scale');
    }
}

export function handleMouseLeave() {
    if (document.getElementsByClassName('cursor-circle')[0]) {
        document.getElementsByClassName('cursor-circle')[0].classList.remove('cursor-circle-scale');
    }
}

export function isMobile() {
    const userAgent = navigator.userAgent;
    const mobileAgents = [
        'phone', 'pad', 'pod', 'iPhone', 'iPod', 'ios', 'iPad', 'Android',
        'Mobile', 'BlackBerry', 'IEMobile', 'MQQBrowser', 'JUC', 'Fennec',
        'wOSBrowser', 'BrowserNG', 'WebOS', 'Symbian', 'Windows Phone'
    ];
    return mobileAgents.some(agent => userAgent.indexOf(agent) !== -1) || window.innerWidth < 750;
}


export function iconPath(view,icon) {
    return require(`@/assets/images/${view}/${icon}`);
}