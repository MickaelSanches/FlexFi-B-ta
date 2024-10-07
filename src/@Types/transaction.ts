export interface Transaction {
  blockTime: number | null;
  meta: {
    preBalances: number[];
    postBalances: number[];
  };
  transaction: {
    message: {
      accountKeys: string[];
    };
    signatures: string[];
  };
}
