// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc0, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Auctiooner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctiooner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctiooner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    Timeout: ctc0,
    minimumBud: ctc0,
    nftId: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc0]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Bool;
  
  
  const v286 = stdlib.protect(ctc2, await interact.initateBid(), {
    at: './index.rsh:20:77:application',
    fs: ['at ./index.rsh:19:21:application call to [unknown function] (defined at: ./index.rsh:19:25:function exp)'],
    msg: 'initateBid',
    who: 'Auctiooner'
    });
  const v287 = v286.Timeout;
  const v288 = v286.minimumBud;
  const v289 = v286.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v289, v287, v288],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:20:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v294, v295, v296], secs: v298, time: v297, didSend: v35, from: v293 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v294
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v294, v295, v296], secs: v298, time: v297, didSend: v35, from: v293 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v293, v294, v295, v296, v297],
    evt_cnt: 0,
    funcNum: 1,
    lct: v297,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:20:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '1'), v294]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v308, time: v307, didSend: v42, from: v306 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v294
        });
      const v323 = stdlib.add(v297, v295);
      const v324 = v296;
      const v325 = true;
      const v326 = v293;
      const v327 = v307;
      const v328 = v297;
      
      if (await (async () => {
        const v342 = stdlib.gt(v323, v328);
        
        return v342;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v326,
          tok: v294
          });
        if (v325) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v294
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v293,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v294
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v308, time: v307, didSend: v42, from: v306 } = txn2;
  ;
  ;
  const v318 = stdlib.addressEq(v293, v306);
  stdlib.assert(v318, {
    at: './index.rsh:26:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctiooner'
    });
  const v323 = stdlib.add(v297, v295);
  let v324 = v296;
  let v325 = true;
  let v326 = v293;
  let v327 = v307;
  let v328 = v297;
  
  while (await (async () => {
    const v342 = stdlib.gt(v323, v328);
    
    return v342;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['time', v323],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v293, v294, v323, v324, v325, v326, v327],
        evt_cnt: 0,
        funcNum: 4,
        lct: v327,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:50:23:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v395, time: v394, didSend: v221, from: v393 } = txn4;
          
          ;
          const cv324 = v324;
          const cv325 = v325;
          const cv326 = v326;
          const cv327 = v394;
          const cv328 = v327;
          
          await (async () => {
            const v324 = cv324;
            const v325 = cv325;
            const v326 = cv326;
            const v327 = cv327;
            const v328 = cv328;
            
            if (await (async () => {
              const v342 = stdlib.gt(v323, v328);
              
              return v342;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v326,
                tok: v294
                });
              if (v325) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v294
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v293,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v294
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc1, ctc0, ctc0, ctc7, ctc4, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v395, time: v394, didSend: v221, from: v393 } = txn4;
      ;
      const v396 = stdlib.addressEq(v293, v393);
      stdlib.assert(v396, {
        at: './index.rsh:50:23:dot',
        fs: ['at ./index.rsh:49:38:application call to [unknown function] (defined at: ./index.rsh:49:38:function exp)'],
        msg: 'sender correct',
        who: 'Auctiooner'
        });
      const cv324 = v324;
      const cv325 = v325;
      const cv326 = v326;
      const cv327 = v394;
      const cv328 = v327;
      
      v324 = cv324;
      v325 = cv325;
      v326 = cv326;
      v327 = cv327;
      v328 = cv328;
      
      continue;
      }
    else {
      const {data: [v362], secs: v364, time: v363, didSend: v163, from: v361 } = txn3;
      undefined /* setApiDetails */;
      const v366 = v362[stdlib.checkedBigNumberify('./index.rsh:37:13:spread', stdlib.UInt_max, '0')];
      const v367 = stdlib.gt(v366, v324);
      stdlib.assert(v367, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:38:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:32:application call to [unknown function] (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:37:32:application call to [unknown function] (defined at: ./index.rsh:37:32:function exp)'],
        msg: null,
        who: 'Auctiooner'
        });
      ;
      const v375 = [v326, v324];
      await txn3.getOutput('Bidder_bid', 'v375', ctc5, v375);
      if (v325) {
        stdlib.protect(ctc6, await interact.seeBid(v361, v366), {
          at: './index.rsh:45:35:application',
          fs: ['at ./index.rsh:45:35:application call to [unknown function] (defined at: ./index.rsh:45:35:function exp)', 'at ./index.rsh:45:35:application call to "liftedInteract" (defined at: ./index.rsh:45:35:application)', 'at ./index.rsh:39:32:application call to [unknown function] (defined at: ./index.rsh:39:32:function exp)'],
          msg: 'seeBid',
          who: 'Auctiooner'
          });
        
        const cv324 = v366;
        const cv325 = false;
        const cv326 = v361;
        const cv327 = v363;
        const cv328 = v327;
        
        v324 = cv324;
        v325 = cv325;
        v326 = cv326;
        v327 = cv327;
        v328 = cv328;
        
        continue;}
      else {
        ;
        stdlib.protect(ctc6, await interact.seeBid(v361, v366), {
          at: './index.rsh:45:35:application',
          fs: ['at ./index.rsh:45:35:application call to [unknown function] (defined at: ./index.rsh:45:35:function exp)', 'at ./index.rsh:45:35:application call to "liftedInteract" (defined at: ./index.rsh:45:35:application)', 'at ./index.rsh:39:32:application call to [unknown function] (defined at: ./index.rsh:39:32:function exp)'],
          msg: 'seeBid',
          who: 'Auctiooner'
          });
        
        const cv324 = v366;
        const cv325 = false;
        const cv326 = v361;
        const cv327 = v363;
        const cv328 = v327;
        
        v324 = cv324;
        v325 = cv325;
        v326 = cv326;
        v327 = cv327;
        v328 = cv328;
        
        continue;}}
    
    }
  ;
  if (v325) {
    stdlib.protect(ctc6, await interact.seeOutcome(v326, v324), {
      at: './index.rsh:57:39:application',
      fs: ['at ./index.rsh:57:39:application call to [unknown function] (defined at: ./index.rsh:57:39:function exp)', 'at ./index.rsh:57:39:application call to "liftedInteract" (defined at: ./index.rsh:57:39:application)'],
      msg: 'seeOutcome',
      who: 'Auctiooner'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc6, await interact.seeOutcome(v326, v324), {
      at: './index.rsh:57:39:application',
      fs: ['at ./index.rsh:57:39:application call to [unknown function] (defined at: ./index.rsh:57:39:function exp)', 'at ./index.rsh:57:39:application call to "liftedInteract" (defined at: ./index.rsh:57:39:application)'],
      msg: 'seeOutcome',
      who: 'Auctiooner'
      });
    
    return;
    }
  
  
  
  };
export async function _Bidder_bid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v293, v294, v323, v324, v325, v326, v327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc2, ctc3, ctc0, ctc2]);
  const v350 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:37:32:application call to [unknown function] (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:37:32:application call to [unknown function] (defined at: ./index.rsh:37:32:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v351 = v350[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v353 = stdlib.gt(v351, v324);
  stdlib.assert(v353, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:32:application call to [unknown function] (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:37:32:application call to [unknown function] (defined at: ./index.rsh:37:32:function exp)'],
    msg: null,
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v293, v294, v323, v324, v325, v326, v327, v350],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v351, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v362], secs: v364, time: v363, didSend: v163, from: v361 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v366 = v362[stdlib.checkedBigNumberify('./index.rsh:37:13:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v366,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v375 = [v326, v324];
      const v376 = await txn1.getOutput('Bidder_bid', 'v375', ctc5, v375);
      
      if (v325) {
        const v634 = v366;
        const v635 = false;
        const v636 = v361;
        const v637 = v363;
        const v639 = stdlib.gt(v323, v327);
        if (v639) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v361,
            tok: v294
            });
          sim_r.txns.push({
            kind: 'from',
            to: v293,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v294
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v326,
          tok: undefined /* Nothing */
          });
        const v640 = v366;
        const v641 = false;
        const v642 = v361;
        const v643 = v363;
        const v645 = stdlib.gt(v323, v327);
        if (v645) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v361,
            tok: v294
            });
          sim_r.txns.push({
            kind: 'from',
            to: v293,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v294
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc0, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v362], secs: v364, time: v363, didSend: v163, from: v361 } = txn1;
  undefined /* setApiDetails */;
  const v366 = v362[stdlib.checkedBigNumberify('./index.rsh:37:13:spread', stdlib.UInt_max, '0')];
  const v367 = stdlib.gt(v366, v324);
  stdlib.assert(v367, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:32:application call to [unknown function] (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:37:32:application call to [unknown function] (defined at: ./index.rsh:37:32:function exp)'],
    msg: null,
    who: 'Bidder_bid'
    });
  ;
  const v375 = [v326, v324];
  const v376 = await txn1.getOutput('Bidder_bid', 'v375', ctc5, v375);
  if (v163) {
    stdlib.protect(ctc6, await interact.out(v362, v376), {
      at: './index.rsh:37:14:application',
      fs: ['at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)', 'at ./index.rsh:40:15:application call to "notify" (defined at: ./index.rsh:39:32:function exp)', 'at ./index.rsh:39:32:application call to [unknown function] (defined at: ./index.rsh:39:32:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v325) {
    const v634 = v366;
    const v635 = false;
    const v636 = v361;
    const v637 = v363;
    const v639 = stdlib.gt(v323, v327);
    if (v639) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v640 = v366;
    const v641 = false;
    const v642 = v361;
    const v643 = v363;
    const v645 = stdlib.gt(v323, v327);
    if (v645) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_bid5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`]
    },
  appApproval: `BiAKAAEEBSggMAhZoI0GJgIBAAAiNQAxGEEDEylkSSJbNQEhB1s1AjYaABdJQQAUIjUEIzUGgaCbvIEBEkQ2GgFCAHQ2GgIXNQQ2GgM2GgEXSYEDDEABEUkkDEAAWSQSRCU0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEEWzX+gASRJzTzsDIGNP4PRDT/MQASRDT/NAMhBVs0/jQDIQZbNANXOAEXNANXOSAyBjQDIQhbQgGHSCU0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/IQVbNf4hBFs1/SEGWzX8VzkgNfshCFs1+kk1BTX5gATXkLTdNPlQsDIGNP0MRDT5F0k1+DT8DUQ0+IgCO4AIAAAAAAAAAXc0+zT8FlBQsDT7NPwWUDUHNANXOAEXQQASNP80/jT9NPgiMQAyBjT6QgD3sSKyATT8sggjshA0+7IHszT/NP40/TT4IjEAMgY0+kIA1UkjDEAAVyMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/oE4WzX9gASai5F0sCM0/ogBwDT/MQASRDT/NP40/TQDIQRbCDQDIQZbIzT/MgY0/UIAeEghCYgBgSI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hB1s1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEJiAFGsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlA0/RZQMgYWUChLAVcAQGdIIzUBMgY1AkIAvTX/Nf41/TX8Nfs1+jX5Nfg0+jT/DUEALjT4NPkWUDT6FlA0+xZQNPwWUQcIUDT9UDT+FlAoSwFXAGFnSCU1ATIGNQJCAHexIrIBI7ISJLIQNP2yFDT5shGzNPxBABqxIrIBIrISJLIQMgmyFTIKshQ0+bIRs0IAKrEisgE0+7III7IQNPiyB7OxIrIBIrISJLIQMgmyFTIKshQ0+bIRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 97,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v294",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v295",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v296",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v294",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v295",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v296",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v362",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v375",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_bid",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T9",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v362",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620016523803806200165283398101604081905262000026916200028b565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e3415600762000184565b620000e36040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208381018051516001600160a01b039081168386019081528251840151604080880191825293518401516060808901918252436080808b0182815260016000819055929092558751808a019a909a5294519095168887015291519187019190915251908501525160a0808501919091528151808503909101815260c0909301905281516200017b926002920190620001ae565b50505062000374565b81620001aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001bc9062000337565b90600052602060002090601f016020900481019282620001e057600085556200022b565b82601f10620001fb57805160ff19168380011785556200022b565b828001600101855582156200022b579182015b828111156200022b5782518255916020019190600101906200020e565b50620002399291506200023d565b5090565b5b808211156200023957600081556001016200023e565b604051606081016001600160401b03811182821017156200028557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029f57600080fd5b604080519081016001600160401b0381118282101715620002d057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ea57600080fd5b620002f462000254565b60208501519092506001600160a01b03811681146200031257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200034c57607f821691505b602082108114156200036e57634e487b7160e01b600052602260045260246000fd5b50919050565b6112ce80620003846000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063a7661d54146100d6578063ab53f2c6146100e9578063b62792241461010c57005b80631e93b0f1146100775780632772eddc1461009b5780632c10a159146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610f10565b610143565b6100756100bc366004610f10565b610179565b3480156100cd57600080fd5b50600154610088565b6100756100e4366004610f10565b6101ab565b3480156100f557600080fd5b506100fe6101dd565b604051610092929190610f58565b61011f61011a366004610f92565b61027a565b6040805182516001600160a01b031681526020928301519281019290925201610092565b604080516060810182526000602082018181529282015290815261017561016f36849003840184611013565b826102d1565b5050565b60408051606081018252600060208201818152928201529081526101756101a536849003840184611078565b826105f7565b60408051606081018252600060208201818152928201529081526101756101d736849003840184611078565b826107d9565b6000606060005460028080546101f2906110b0565b80601f016020809104026020016040519081016040528092919081815260200182805461021e906110b0565b801561026b5780601f106102405761010080835404028352916020019161026b565b820191906000526020600020905b81548152906001019060200180831161024e57829003601f168201915b50505050509050915091509091565b6040805180820190915260008082526020820152610296610da7565b6020810151518390526102bf604080516060810182526000602082018181529282015290815290565b6102c982826102d1565b519392505050565b6102e1600560005414600f6109a5565b81516102fc9015806102f557508251600154145b60106109a5565b60008080556002805461030e906110b0565b80601f016020809104026020016040519081016040528092919081815260200182805461033a906110b0565b80156103875780601f1061035c57610100808354040283529160200191610387565b820191906000526020600020905b81548152906001019060200180831161036a57829003601f168201915b505050505080602001905181019061039f9190611101565b90506103c1604080516060810182526000602082018181529282015290815290565b6103d28260400151431060116109a5565b60408051338152855160208083019190915286015151518183015290517f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae9181900360600190a16060820151602085015151516104319110600d6109a5565b60208401515151610445903414600e6109a5565b60a082015181516001600160a01b039091169052606082015181516020015280516040517fcd4a18dae81c5c5ddb02bd148814e4f161a94e95b432b4889580e547c1994e28916104af9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a18051835260808201511561053c576104cd610dd4565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528682015151518284018051919091528051600093019290925281513391015280514360609091015260c0840151905160800152610536816109cb565b506105f1565b8160a001516001600160a01b03166108fc83606001519081150290604051600060405180830381858888f1935050505015801561057d573d6000803e3d6000fd5b50610586610dd4565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528682015151518284018051919091528051600093019290925281513391015280514360609091015260c08401519051608001526105ef816109cb565b505b50505050565b610607600160005414600b6109a5565b815161062290158061061b57508251600154145b600c6109a5565b600080805560028054610634906110b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610660906110b0565b80156106ad5780601f10610682576101008083540402835291602001916106ad565b820191906000526020600020905b81548152906001019060200180831161069057829003601f168201915b50505050508060200190518101906106c591906111af565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161071c341560086109a5565b61073661072f3383602001516001610b90565b60096109a5565b805161074e906001600160a01b03163314600a6109a5565b610756610dd4565b815181516001600160a01b03918216905260208084015183519216910152604082015160808301516107889190611239565b8151604090810191909152606080840151602080850180519290925281516001910152845181516001600160a01b03909116930192909252815143910152608080840151915101526105f1816109cb565b6107e960056000541460146109a5565b81516108049015806107fd57508251600154145b60156109a5565b600080805560028054610816906110b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610842906110b0565b801561088f5780601f106108645761010080835404028352916020019161088f565b820191906000526020600020905b81548152906001019060200180831161087257829003601f168201915b50505050508060200190518101906108a79190611101565b90506108bb816040015143101560166109a5565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a161090e341560126109a5565b8051610926906001600160a01b0316331460136109a5565b61092e610dd4565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451820152606080860151838601805191909152608080880151825190151595019490945260a087015181519516949092019390935280514393019290925260c0840151915101526105f1816109cb565b816101755760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6020810151608001518151604001511115610af7576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528151516001600160a01b039081168083528351602090810151831681850190815285516040908101518187019081528388018051516060808a01918252825187015115156080808c0191825284518701518b1660a0808e01918252955184015160c0808f0191825260056000554360015589519b8c019c909c5298518c16978a019790975294519188019190915290519286019290925290511515908401525190931691810191909152905160e08201526101000160405160208183030381529060405260029080519060200190610af2929190610e29565b505050565b610b138160000151602001518260200151604001516001610ba8565b80602001516020015115610b3a5760008080556001819055610b3790600290610ead565b50565b8051516020820151516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b79573d6000803e3d6000fd5b5060008080556001819055610b3790600290610ead565b6000610b9e83853085610bbc565b90505b9392505050565b610bb3838383610c96565b610af257600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610c239161125f565b60006040518083038185875af1925050503d8060008114610c60576040519150601f19603f3d011682016040523d82523d6000602084013e610c65565b606091505b5091509150610c7682826001610d67565b5080806020019051810190610c8b919061127b565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610cf59161125f565b60006040518083038185875af1925050503d8060008114610d32576040519150601f19603f3d011682016040523d82523d6000602084013e610d37565b606091505b5091509150610d4882826002610d67565b5080806020019051810190610d5d919061127b565b9695505050505050565b60608315610d76575081610ba1565b825115610d865782518084602001fd5b60405163100960cb60e01b8152600481018390526024016109c2565b905290565b604051806040016040528060008152602001610da260408051808201909152600060208201908152815290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b828054610e35906110b0565b90600052602060002090601f016020900481019282610e575760008555610e9d565b82601f10610e7057805160ff1916838001178555610e9d565b82800160010185558215610e9d579182015b82811115610e9d578251825591602001919060010190610e82565b50610ea9929150610ee3565b5090565b508054610eb9906110b0565b6000825580601f10610ec9575050565b601f016020900490600052602060002090810190610b3791905b5b80821115610ea95760008155600101610ee4565b600060408284031215610f0a57600080fd5b50919050565b600060408284031215610f2257600080fd5b610ba18383610ef8565b60005b83811015610f47578181015183820152602001610f2f565b838111156105f15750506000910152565b8281526040602082015260008251806040840152610f7d816060850160208701610f2c565b601f01601f1916919091016060019392505050565b600060208284031215610fa457600080fd5b5035919050565b6040805190810167ffffffffffffffff81118282101715610fdc57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610fdc57634e487b7160e01b600052604160045260246000fd5b6000818303604081121561102657600080fd5b61102e610fab565b833581526020601f198301121561104457600080fd5b61104c610fe2565b9150611056610fe2565b602094850135815282529283015250919050565b8015158114610b3757600080fd5b60006040828403121561108a57600080fd5b611092610fab565b8235815260208301356110a48161106a565b60208201529392505050565b600181811c908216806110c457607f821691505b60208210811415610f0a57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146110fc57600080fd5b919050565b600060e0828403121561111357600080fd5b60405160e0810181811067ffffffffffffffff8211171561114457634e487b7160e01b600052604160045260246000fd5b604052611150836110e5565b815261115e602084016110e5565b6020820152604083015160408201526060830151606082015260808301516111858161106a565b608082015261119660a084016110e5565b60a082015260c083015160c08201528091505092915050565b600060a082840312156111c157600080fd5b60405160a0810181811067ffffffffffffffff821117156111f257634e487b7160e01b600052604160045260246000fd5b6040526111fe836110e5565b815261120c602084016110e5565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6000821982111561125a57634e487b7160e01b600052601160045260246000fd5b500190565b60008251611271818460208701610f2c565b9190910192915050565b60006020828403121561128d57600080fd5b8151610ba18161106a56fea264697066735822122065f8bcf1d697bbc1b7ecd44d93274bade1d545f0b79f2c058348dc2f4d17147564736f6c634300080c0033`,
  BytecodeLen: 5714,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:25:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:58:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:58:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:33:20:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Auctiooner": Auctiooner,
  "Bidder_bid": Bidder_bid
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
