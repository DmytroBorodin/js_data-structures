export const MainWrapper = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div className="flex justify-center items-start w-[calc(100%-208px)] p-16">
      {children}
    </div>
  );
};
