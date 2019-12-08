import { adjectives, nouns } from "./words";

// 비밀 값 요청하기
export const generateSecret = () => {
    const randomWord = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomWord]} ${nouns[randomWord]}`
}