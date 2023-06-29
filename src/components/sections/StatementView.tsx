import { type Problem } from "@prisma/client";

export const StatementView = (props: {problem: Problem}) => {
    return <div>
        <p>{props.problem.title}</p>
    </div>
}