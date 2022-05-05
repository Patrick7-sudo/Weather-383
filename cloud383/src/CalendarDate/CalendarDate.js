import css from "./CalendarDate.module.css";

export default function CalendarDate({ date }) {
  return <h3 className={css.date}>{date}</h3>;
}
