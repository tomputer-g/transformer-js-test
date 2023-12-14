import {pipeline} from '@xenova/transformers'
let classifier = await pipeline('sentiment-analysis', 'Xenova/bert-base-multilingual-uncased-sentiment');
let result = await classifier('Skibidi wap-pa-pa-pa-pa-pa-pa-pa-pa-pa');
console.log(result);
// console.log("Hello World!")