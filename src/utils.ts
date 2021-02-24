import {Question} from "./API";

export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export const mapResponse = (array: any[]) => {
    return array.map(
        (question:Question) => ({
            ...question, answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer,
            ])
        })
    )
}
