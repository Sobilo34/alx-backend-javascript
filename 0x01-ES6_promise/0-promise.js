#!/usr/bin/node

export default function getResponseFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
