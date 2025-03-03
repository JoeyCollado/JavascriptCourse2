// clearTimeout() = can cancel a timeout before it triggers

const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

clearTimeout(timeoutId);