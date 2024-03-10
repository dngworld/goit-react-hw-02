import css from "./Options.module.css";
export const Options = ({ onUpdate, isHidden, onReset }) => {
  return (
    <div className={css.container}>
      <button className={css.goodBtn} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.neutralBtn} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.badBtn} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {!isHidden && (
        <button className={css.resetBtn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
