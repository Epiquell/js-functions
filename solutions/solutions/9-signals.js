import get from "lodash/get.js";

const freeEmailDomains = ["gmail.com", "yandex.ru", "hotmail.com", "yahoo.com"];

// BEGIN
export default function getFreeDomainsCount(mails) {


const domains = mails.map((mail) => mail.split("@")[1]);


const freeDomains = domains.filter((domain) =>

freeEmailDomains.includes(domain)

);
return freeDomains.reduce((acc, domain) => {


if (!acc[domain]) {
acc[domain] = 1;
} else {
acc[domain]++;
}
return acc;
}, {});
}
// END