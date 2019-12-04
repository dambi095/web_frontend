import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import "./env";

// 비밀 값 요청하기
export const generateSecret = () => {
    const randomWord = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomWord]} ${nouns[randomWord]}`
}

// 비밀 값을 메일로 전송하기 
export const sendMail = (email) => {
    console.log(" send Mail : " , process.env.SENDGRID_USERNAME);
    const options = {
        auth: {
            api_user: process.env.SENDGRID_USERNAME,
            api_key: process.env.SENDGIRD_PASSWORD
        }
    };
    const client = nodemailer.createTransport(sgTransport(options));
    return client.sendMail(email);
}

export const sendSecretMail = (adress, secret) => {
    const email = {
        from: "project@exdiary.com",
        to: adress,
        subject: "이메일 인증을 위한 시크릿 코드를 입력해주세요!",
        html: `이메일 인증을 위한 시크릿 코드는 <strong>${secret}</> 입니다 :)`
    }
    return sendMail(email)
}