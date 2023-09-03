"use client";
import MainPage from "@/src/components/organism/MainPage";
import CardMatrix from "@/src/components/molecules/main/CardMatrix";
import ResultButton from "@/src/components/atoms/ResultButton";
import ResultContainer from "@/src/components/molecules/main/ResultContainer";
import {
  useSettingOrdo,
  useCreateOrdo,
  useSetMatrix,
  useAddition,
} from "@/src/hooks/index";

const MatrixAddition = () => {
  // setting ordo
  const {
    row: row1,
    col: col1,
    handleSettingOrdo: handleSettingOrdo1,
  } = useSettingOrdo();
  const {
    row: row2,
    col: col2,
    handleSettingOrdo: handleSettingOrdo2,
  } = useSettingOrdo();

  // set matrix input element / ordo
  const ordoElements1 = useCreateOrdo(row1, col1);
  const ordoElements2 = useCreateOrdo(row2, col2);

  // set matrix
  const { matrix: matrixA, handleSetMatrix: handleSetMatrix1 } = useSetMatrix(
    row1,
    col1
  );
  const { matrix: matrixB, handleSetMatrix: handleSetMatrix2 } = useSetMatrix(
    row2,
    col2
  );

  // ADDITIONAL FUNCTION
  const { results: addResult, addFunc } = useAddition();

  return (
    <MainPage>
      <MainPage.Header title="MATRIX ADDITION" />
      <MainPage.Body>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <CardMatrix>
            <CardMatrix.Header title={"MATRIX A"} />
            <CardMatrix.SettingOrdo
              handleSettingOrdo={handleSettingOrdo1}
              row={row1}
              col={col1}
            />
            <CardMatrix.SetMatrix handleSetMatrix={handleSetMatrix1}>
              {ordoElements1}
            </CardMatrix.SetMatrix>
          </CardMatrix>
          <CardMatrix>
            <CardMatrix.Header title={"MATRIX B"} />
            <CardMatrix.SettingOrdo
              handleSettingOrdo={handleSettingOrdo2}
              row={row2}
              col={col2}
            />
            <CardMatrix.SetMatrix handleSetMatrix={handleSetMatrix2}>
              {ordoElements2}
            </CardMatrix.SetMatrix>
          </CardMatrix>
        </div>
        <ResultButton funcLogic={() => addFunc(matrixA, matrixB)} />
        <ResultContainer operationIdentity={"A + B ="} results={addResult} />
      </MainPage.Body>
      <MainPage.Footer />
    </MainPage>
  );
};

export default MatrixAddition;
