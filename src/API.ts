import axios from "axios";
import {mapResponse} from "./utils";

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};


export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = (amount: number, difficulty: Difficulty) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    return axios.get(url).then(response => response.data).then(data => mapResponse(data.results))

}


