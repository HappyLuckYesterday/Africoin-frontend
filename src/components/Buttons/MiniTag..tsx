const MiniTag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-green-500 text-white rounded-lg px-2 py-1 text-sm w-min">
      <p>{text}</p>
    </div>
  );
};
export default MiniTag;
