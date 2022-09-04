// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 19;

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
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc5],
      4: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function _Bidder_makeBid4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_makeBid4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_makeBid4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Bidder_makeBid0_65: ctc8,
    Bidder_seeBids0_65: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v504, v505, v535, v536, v537, v538, v539, v545, v546] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc1, ctc1, ctc3, ctc5, ctc1, ctc7, ctc1]);
  const v557 = ctc.selfAddress();
  const v559 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:55:41:application call to [unknown function] (defined at: ./index.rsh:55:41:function exp)', 'at ./index.rsh:52:67:application call to "runBidder_makeBid0_65" (defined at: ./index.rsh:55:12:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:52:67:function exp)'],
    msg: 'in',
    who: 'Bidder_makeBid'
    });
  const v560 = v559[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v562 = stdlib.addressEq(v557, v504);
  const v563 = v562 ? false : true;
  stdlib.assert(v563, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:56:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:55:41:application call to [unknown function] (defined at: ./index.rsh:55:41:function exp)', 'at ./index.rsh:52:67:application call to "runBidder_makeBid0_65" (defined at: ./index.rsh:55:12:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:52:67:function exp)'],
    msg: 'The creator of the bid cannot make another bid',
    who: 'Bidder_makeBid'
    });
  const v570 = ['Bidder_makeBid0_65', v559];
  
  const txn1 = await (ctc.sendrecv({
    args: [v504, v505, v535, v536, v537, v538, v539, v545, v546, v570],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v560, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v597], secs: v599, time: v598, didSend: v297, from: v596 } = txn1;
      
      switch (v597[0]) {
        case 'Bidder_makeBid0_65': {
          const v600 = v597[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_makeBid"
            });
          const v605 = v600[stdlib.checkedBigNumberify('./index.rsh:55:12:spread', stdlib.UInt_max, '0')];
          const v616 = stdlib.add(v546, v605);
          sim_r.txns.push({
            amt: v605,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v623 = stdlib.gt(v605, v536);
          if (v623) {
            const v624 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v596), null);
            let v625;
            switch (v624[0]) {
              case 'None': {
                const v626 = v624[1];
                v625 = v605;
                
                break;
                }
              case 'Some': {
                const v627 = v624[1];
                const v628 = stdlib.add(v627, v605);
                v625 = v628;
                
                break;
                }
              }
            await stdlib.simMapSet(sim_r, 0, v596, v625);
            if (v538) {
              const v653 = [v596, v605, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v654 = await txn1.getOutput('Bidder_makeBid', 'v653', ctc11, v653);
              
              const v1188 = v605;
              const v1189 = v596;
              const v1190 = false;
              const v1191 = v598;
              const v1193 = v545;
              const v1194 = v616;
              const v1195 = stdlib.gt(v535, v539);
              if (v1195) {
                sim_r.isHalt = false;
                }
              else {
                const v1196 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
                const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v596,
                  tok: v505
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v504,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v505
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v637 = stdlib.sub(v616, v536);
              sim_r.txns.push({
                kind: 'from',
                to: v537,
                tok: undefined /* Nothing */
                });
              const v638 = [v596, v605, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v639 = await txn1.getOutput('Bidder_makeBid', 'v638', ctc11, v638);
              
              const v1199 = v605;
              const v1200 = v596;
              const v1201 = false;
              const v1202 = v598;
              const v1204 = v545;
              const v1205 = v637;
              const v1206 = stdlib.gt(v535, v539);
              if (v1206) {
                sim_r.isHalt = false;
                }
              else {
                const v1207 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
                const v1208 = v1207[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v596,
                  tok: v505
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v504,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v505
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v668 = [v537, v536, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
            const v669 = await txn1.getOutput('Bidder_makeBid', 'v668', ctc11, v668);
            
            const v1210 = v536;
            const v1211 = v537;
            const v1212 = v538;
            const v1213 = v598;
            const v1215 = v545;
            const v1216 = v616;
            const v1217 = stdlib.gt(v535, v539);
            if (v1217) {
              sim_r.isHalt = false;
              }
            else {
              const v1218 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
              const v1219 = v1218[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v537,
                tok: v505
                });
              sim_r.txns.push({
                kind: 'from',
                to: v504,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v505
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Bidder_seeBids0_65': {
          const v701 = v597[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc3, ctc5, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v597], secs: v599, time: v598, didSend: v297, from: v596 } = txn1;
  switch (v597[0]) {
    case 'Bidder_makeBid0_65': {
      const v600 = v597[1];
      undefined /* setApiDetails */;
      const v605 = v600[stdlib.checkedBigNumberify('./index.rsh:55:12:spread', stdlib.UInt_max, '0')];
      const v606 = stdlib.addressEq(v596, v504);
      const v607 = v606 ? false : true;
      stdlib.assert(v607, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:56:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:55:41:application call to [unknown function] (defined at: ./index.rsh:55:41:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:55:41:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:52:67:function exp)'],
        msg: 'The creator of the bid cannot make another bid',
        who: 'Bidder_makeBid'
        });
      const v616 = stdlib.add(v546, v605);
      ;
      const v623 = stdlib.gt(v605, v536);
      if (v623) {
        const v624 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v596), null);
        let v625;
        switch (v624[0]) {
          case 'None': {
            const v626 = v624[1];
            v625 = v605;
            
            break;
            }
          case 'Some': {
            const v627 = v624[1];
            const v628 = stdlib.add(v627, v605);
            v625 = v628;
            
            break;
            }
          }
        await stdlib.mapSet(map0, v596, v625);
        if (v538) {
          const v653 = [v596, v605, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v654 = await txn1.getOutput('Bidder_makeBid', 'v653', ctc11, v653);
          if (v297) {
            stdlib.protect(ctc0, await interact.out(v600, v654), {
              at: './index.rsh:55:13:application',
              fs: ['at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)', 'at ./index.rsh:79:20:application call to "resolve" (defined at: ./index.rsh:58:38:function exp)', 'at ./index.rsh:58:38:application call to [unknown function] (defined at: ./index.rsh:58:38:function exp)'],
              msg: 'out',
              who: 'Bidder_makeBid'
              });
            }
          else {
            }
          
          const v1188 = v605;
          const v1189 = v596;
          const v1190 = false;
          const v1191 = v598;
          const v1193 = v545;
          const v1194 = v616;
          const v1195 = stdlib.gt(v535, v539);
          if (v1195) {
            return;
            }
          else {
            const v1196 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
            const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v637 = stdlib.sub(v616, v536);
          ;
          const v638 = [v596, v605, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v639 = await txn1.getOutput('Bidder_makeBid', 'v638', ctc11, v638);
          if (v297) {
            stdlib.protect(ctc0, await interact.out(v600, v639), {
              at: './index.rsh:55:13:application',
              fs: ['at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)', 'at ./index.rsh:79:20:application call to "resolve" (defined at: ./index.rsh:58:38:function exp)', 'at ./index.rsh:58:38:application call to [unknown function] (defined at: ./index.rsh:58:38:function exp)'],
              msg: 'out',
              who: 'Bidder_makeBid'
              });
            }
          else {
            }
          
          const v1199 = v605;
          const v1200 = v596;
          const v1201 = false;
          const v1202 = v598;
          const v1204 = v545;
          const v1205 = v637;
          const v1206 = stdlib.gt(v535, v539);
          if (v1206) {
            return;
            }
          else {
            const v1207 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
            const v1208 = v1207[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        const v668 = [v537, v536, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v669 = await txn1.getOutput('Bidder_makeBid', 'v668', ctc11, v668);
        if (v297) {
          stdlib.protect(ctc0, await interact.out(v600, v669), {
            at: './index.rsh:55:13:application',
            fs: ['at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)', 'at ./index.rsh:84:20:application call to "resolve" (defined at: ./index.rsh:58:38:function exp)', 'at ./index.rsh:58:38:application call to [unknown function] (defined at: ./index.rsh:58:38:function exp)'],
            msg: 'out',
            who: 'Bidder_makeBid'
            });
          }
        else {
          }
        
        const v1210 = v536;
        const v1211 = v537;
        const v1212 = v538;
        const v1213 = v598;
        const v1215 = v545;
        const v1216 = v616;
        const v1217 = stdlib.gt(v535, v539);
        if (v1217) {
          return;
          }
        else {
          const v1218 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
          const v1219 = v1218[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Bidder_seeBids0_65': {
      const v701 = v597[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_seeBids4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_seeBids4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_seeBids4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    Bidder_makeBid0_65: ctc9,
    Bidder_seeBids0_65: ctc8
    });
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v504, v505, v535, v536, v537, v538, v539, v545, v546] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc1, ctc1, ctc3, ctc5, ctc1, ctc7, ctc1]);
  const v572 = ctc.selfAddress();
  const v574 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:90:32:application call to [unknown function] (defined at: ./index.rsh:90:32:function exp)', 'at ./index.rsh:52:67:application call to "runBidder_seeBids0_65" (defined at: ./index.rsh:90:12:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:52:67:function exp)'],
    msg: 'in',
    who: 'Bidder_seeBids'
    });
  const v575 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v572), null);
  let v576;
  switch (v575[0]) {
    case 'None': {
      const v577 = v575[1];
      v576 = false;
      
      break;
      }
    case 'Some': {
      const v578 = v575[1];
      v576 = true;
      
      break;
      }
    }
  stdlib.assert(v576, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:91:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:90:32:application call to [unknown function] (defined at: ./index.rsh:90:32:function exp)', 'at ./index.rsh:52:67:application call to "runBidder_seeBids0_65" (defined at: ./index.rsh:90:12:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:52:67:function exp)'],
    msg: 'Unauthorized! You have not made any bid in this auction.',
    who: 'Bidder_seeBids'
    });
  const v583 = ['Bidder_seeBids0_65', v574];
  
  let v592;
  switch (v575[0]) {
    case 'None': {
      const v593 = v575[1];
      v592 = false;
      
      break;
      }
    case 'Some': {
      const v594 = v575[1];
      v592 = true;
      
      break;
      }
    }
  stdlib.assert(v592, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:91:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:90:32:application call to [unknown function] (defined at: ./index.rsh:90:32:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:90:32:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:52:67:function exp)'],
    msg: 'Unauthorized! You have not made any bid in this auction.',
    who: 'Bidder_seeBids'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v504, v505, v535, v536, v537, v538, v539, v545, v546, v583],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:93:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v597], secs: v599, time: v598, didSend: v297, from: v596 } = txn1;
      
      switch (v597[0]) {
        case 'Bidder_makeBid0_65': {
          const v600 = v597[1];
          
          break;
          }
        case 'Bidder_seeBids0_65': {
          const v701 = v597[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_seeBids"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v596), null);
          ;
          const v790 = stdlib.addressEq(v596, v537);
          const v791 = v790 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v792 = [v537, v536, v791];
          const v793 = await txn1.getOutput('Bidder_seeBids', 'v792', ctc11, v792);
          
          const v1265 = v536;
          const v1266 = v537;
          const v1267 = v538;
          const v1268 = v598;
          const v1270 = v545;
          const v1271 = v546;
          const v1272 = stdlib.gt(v535, v539);
          if (v1272) {
            sim_r.isHalt = false;
            }
          else {
            const v1273 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
            const v1274 = v1273[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v537,
              tok: v505
              });
            sim_r.txns.push({
              kind: 'from',
              to: v504,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v505
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc3, ctc5, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v597], secs: v599, time: v598, didSend: v297, from: v596 } = txn1;
  switch (v597[0]) {
    case 'Bidder_makeBid0_65': {
      const v600 = v597[1];
      return;
      break;
      }
    case 'Bidder_seeBids0_65': {
      const v701 = v597[1];
      undefined /* setApiDetails */;
      const v711 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v596), null);
      let v712;
      switch (v711[0]) {
        case 'None': {
          const v713 = v711[1];
          v712 = false;
          
          break;
          }
        case 'Some': {
          const v714 = v711[1];
          v712 = true;
          
          break;
          }
        }
      stdlib.assert(v712, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:91:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:90:32:application call to [unknown function] (defined at: ./index.rsh:90:32:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:90:32:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:52:67:function exp)'],
        msg: 'Unauthorized! You have not made any bid in this auction.',
        who: 'Bidder_seeBids'
        });
      ;
      let v786;
      switch (v711[0]) {
        case 'None': {
          const v787 = v711[1];
          v786 = false;
          
          break;
          }
        case 'Some': {
          const v788 = v711[1];
          v786 = true;
          
          break;
          }
        }
      stdlib.assert(v786, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:91:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:93:30:application call to [unknown function] (defined at: ./index.rsh:93:30:function exp)'],
        msg: 'Unauthorized! You have not made any bid in this auction.',
        who: 'Bidder_seeBids'
        });
      const v790 = stdlib.addressEq(v596, v537);
      const v791 = v790 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v792 = [v537, v536, v791];
      const v793 = await txn1.getOutput('Bidder_seeBids', 'v792', ctc11, v792);
      if (v297) {
        stdlib.protect(ctc0, await interact.out(v701, v793), {
          at: './index.rsh:90:13:application',
          fs: ['at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:13:function exp)', 'at ./index.rsh:95:18:application call to "resolve" (defined at: ./index.rsh:93:30:function exp)', 'at ./index.rsh:93:30:application call to [unknown function] (defined at: ./index.rsh:93:30:function exp)'],
          msg: 'out',
          who: 'Bidder_seeBids'
          });
        }
      else {
        }
      
      const v1265 = v536;
      const v1266 = v537;
      const v1267 = v538;
      const v1268 = v598;
      const v1270 = v545;
      const v1271 = v546;
      const v1272 = stdlib.gt(v535, v539);
      if (v1272) {
        return;
        }
      else {
        const v1273 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
        const v1274 = v1273[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc1, ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Bidder_makeBid0_65: ctc5,
    Bidder_seeBids0_65: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v490 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v491 = [v490];
  const v497 = stdlib.protect(ctc4, await interact.createBid(), {
    at: './index.rsh:36:78:application',
    fs: ['at ./index.rsh:35:17:application call to [unknown function] (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'createBid',
    who: 'Creator'
    });
  const v498 = v497[stdlib.checkedBigNumberify('./index.rsh:36:78:application', stdlib.UInt_max, '0')];
  const v499 = v497[stdlib.checkedBigNumberify('./index.rsh:36:78:application', stdlib.UInt_max, '1')];
  const v500 = v497[stdlib.checkedBigNumberify('./index.rsh:36:78:application', stdlib.UInt_max, '2')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v498, v499, v500],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v505, v506, v507], secs: v509, time: v508, didSend: v35, from: v504 } = txn1;
      
      const v510 = v491[stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '0')];
      const v512 = v510[stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '1')];
      const v513 = v510[stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '2')];
      const v514 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v512, v513];
      const v515 = stdlib.Array_set(v491, stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '0'), v514);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v505
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v505, v506, v507], secs: v509, time: v508, didSend: v35, from: v504 } = txn1;
  const v510 = v491[stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '0')];
  const v512 = v510[stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '1')];
  const v513 = v510[stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '2')];
  const v514 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v512, v513];
  const v515 = stdlib.Array_set(v491, stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '0'), v514);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v504, v505, v506, v507, v508, v515],
    evt_cnt: 0,
    funcNum: 1,
    lct: v508,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:42:19:decimal', stdlib.UInt_max, '1'), v505]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v519, time: v518, didSend: v42, from: v517 } = txn2;
      
      ;
      const v520 = v515[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '0')];
      const v521 = v520[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '0')];
      const v522 = stdlib.add(v521, stdlib.checkedBigNumberify('./index.rsh:42:19:decimal', stdlib.UInt_max, '1'));
      const v525 = v520[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '1')];
      const v526 = v520[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '2')];
      const v527 = [v522, v525, v526];
      const v528 = stdlib.Array_set(v515, stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '0'), v527);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:42:19:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v505
        });
      
      const v535 = stdlib.add(v508, v506);
      const v536 = v507;
      const v537 = v504;
      const v538 = true;
      const v539 = v518;
      const v540 = v508;
      const v545 = v528;
      const v546 = stdlib.checkedBigNumberify('./index.rsh:33:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v551 = stdlib.gt(v535, v540);
        
        return v551;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v808 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
        const v809 = v808[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v537,
          tok: v505
          });
        sim_r.txns.push({
          kind: 'from',
          to: v504,
          tok: undefined /* Nothing */
          });
        const v827 = stdlib.addressEq(v537, v504);
        if (v827) {
          
          }
        else {
          
          }
        sim_r.txns.push({
          kind: 'halt',
          tok: v505
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc1, ctc1, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v519, time: v518, didSend: v42, from: v517 } = txn2;
  ;
  const v520 = v515[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '0')];
  const v521 = v520[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '0')];
  const v522 = stdlib.add(v521, stdlib.checkedBigNumberify('./index.rsh:42:19:decimal', stdlib.UInt_max, '1'));
  const v525 = v520[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '1')];
  const v526 = v520[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '2')];
  const v527 = [v522, v525, v526];
  const v528 = stdlib.Array_set(v515, stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '0'), v527);
  ;
  const v529 = stdlib.addressEq(v504, v517);
  stdlib.assert(v529, {
    at: './index.rsh:42:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.auctionIsReady(), {
    at: './index.rsh:46:36:application',
    fs: ['at ./index.rsh:46:36:application call to [unknown function] (defined at: ./index.rsh:46:36:function exp)', 'at ./index.rsh:46:36:application call to "liftedInteract" (defined at: ./index.rsh:46:36:application)'],
    msg: 'auctionIsReady',
    who: 'Creator'
    });
  
  const v535 = stdlib.add(v508, v506);
  let v536 = v507;
  let v537 = v504;
  let v538 = true;
  let v539 = v518;
  let v540 = v508;
  let v545 = v528;
  let v546 = stdlib.checkedBigNumberify('./index.rsh:33:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v551 = stdlib.gt(v535, v540);
    
    return v551;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc7],
      timeoutAt: ['time', v535],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v504, v505, v535, v536, v537, v538, v539, v545, v546],
        evt_cnt: 0,
        funcNum: 4,
        lct: v539,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:101:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v804, time: v803, didSend: v421, from: v802 } = txn4;
          
          ;
          const cv536 = v536;
          const cv537 = v537;
          const cv538 = v538;
          const cv539 = v803;
          const cv540 = v539;
          const cv545 = v545;
          const cv546 = v546;
          
          await (async () => {
            const v536 = cv536;
            const v537 = cv537;
            const v538 = cv538;
            const v539 = cv539;
            const v540 = cv540;
            const v545 = cv545;
            const v546 = cv546;
            
            if (await (async () => {
              const v551 = stdlib.gt(v535, v540);
              
              return v551;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v808 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
              const v809 = v808[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v537,
                tok: v505
                });
              sim_r.txns.push({
                kind: 'from',
                to: v504,
                tok: undefined /* Nothing */
                });
              const v827 = stdlib.addressEq(v537, v504);
              if (v827) {
                
                }
              else {
                
                }
              sim_r.txns.push({
                kind: 'halt',
                tok: v505
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc8, ctc3, ctc1, ctc1, ctc8, ctc10, ctc1, ctc12, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v804, time: v803, didSend: v421, from: v802 } = txn4;
      ;
      const v805 = stdlib.addressEq(v504, v802);
      stdlib.assert(v805, {
        at: './index.rsh:101:19:dot',
        fs: ['at ./index.rsh:100:31:application call to [unknown function] (defined at: ./index.rsh:100:31:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv536 = v536;
      const cv537 = v537;
      const cv538 = v538;
      const cv539 = v803;
      const cv540 = v539;
      const cv545 = v545;
      const cv546 = v546;
      
      v536 = cv536;
      v537 = cv537;
      v538 = cv538;
      v539 = cv539;
      v540 = cv540;
      v545 = cv545;
      v546 = cv546;
      
      continue;
      }
    else {
      const {data: [v597], secs: v599, time: v598, didSend: v297, from: v596 } = txn3;
      switch (v597[0]) {
        case 'Bidder_makeBid0_65': {
          const v600 = v597[1];
          undefined /* setApiDetails */;
          const v605 = v600[stdlib.checkedBigNumberify('./index.rsh:55:12:spread', stdlib.UInt_max, '0')];
          const v606 = stdlib.addressEq(v596, v504);
          const v607 = v606 ? false : true;
          stdlib.assert(v607, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:56:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:55:41:application call to [unknown function] (defined at: ./index.rsh:55:41:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:55:41:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:52:67:function exp)'],
            msg: 'The creator of the bid cannot make another bid',
            who: 'Creator'
            });
          const v616 = stdlib.add(v546, v605);
          ;
          const v623 = stdlib.gt(v605, v536);
          if (v623) {
            const v624 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v596), null);
            let v625;
            switch (v624[0]) {
              case 'None': {
                const v626 = v624[1];
                v625 = v605;
                
                break;
                }
              case 'Some': {
                const v627 = v624[1];
                const v628 = stdlib.add(v627, v605);
                v625 = v628;
                
                break;
                }
              }
            await stdlib.mapSet(map0, v596, v625);
            stdlib.protect(ctc0, await interact.seeOutcome(v596, v605), {
              at: './index.rsh:72:34:application',
              fs: ['at ./index.rsh:71:17:application call to [unknown function] (defined at: ./index.rsh:71:42:function exp)', 'at ./index.rsh:58:38:application call to [unknown function] (defined at: ./index.rsh:58:38:function exp)'],
              msg: 'seeOutcome',
              who: 'Creator'
              });
            
            if (v538) {
              const v653 = [v596, v605, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              await txn3.getOutput('Bidder_makeBid', 'v653', ctc9, v653);
              const cv536 = v605;
              const cv537 = v596;
              const cv538 = false;
              const cv539 = v598;
              const cv540 = v539;
              const cv545 = v545;
              const cv546 = v616;
              
              v536 = cv536;
              v537 = cv537;
              v538 = cv538;
              v539 = cv539;
              v540 = cv540;
              v545 = cv545;
              v546 = cv546;
              
              continue;}
            else {
              const v637 = stdlib.sub(v616, v536);
              ;
              const v638 = [v596, v605, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              await txn3.getOutput('Bidder_makeBid', 'v638', ctc9, v638);
              const cv536 = v605;
              const cv537 = v596;
              const cv538 = false;
              const cv539 = v598;
              const cv540 = v539;
              const cv545 = v545;
              const cv546 = v637;
              
              v536 = cv536;
              v537 = cv537;
              v538 = cv538;
              v539 = cv539;
              v540 = cv540;
              v545 = cv545;
              v546 = cv546;
              
              continue;}}
          else {
            const v668 = [v537, v536, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
            await txn3.getOutput('Bidder_makeBid', 'v668', ctc9, v668);
            const cv536 = v536;
            const cv537 = v537;
            const cv538 = v538;
            const cv539 = v598;
            const cv540 = v539;
            const cv545 = v545;
            const cv546 = v616;
            
            v536 = cv536;
            v537 = cv537;
            v538 = cv538;
            v539 = cv539;
            v540 = cv540;
            v545 = cv545;
            v546 = cv546;
            
            continue;}
          break;
          }
        case 'Bidder_seeBids0_65': {
          const v701 = v597[1];
          undefined /* setApiDetails */;
          const v711 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v596), null);
          let v712;
          switch (v711[0]) {
            case 'None': {
              const v713 = v711[1];
              v712 = false;
              
              break;
              }
            case 'Some': {
              const v714 = v711[1];
              v712 = true;
              
              break;
              }
            }
          stdlib.assert(v712, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:91:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:90:32:application call to [unknown function] (defined at: ./index.rsh:90:32:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:90:32:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:52:67:function exp)'],
            msg: 'Unauthorized! You have not made any bid in this auction.',
            who: 'Creator'
            });
          ;
          let v786;
          switch (v711[0]) {
            case 'None': {
              const v787 = v711[1];
              v786 = false;
              
              break;
              }
            case 'Some': {
              const v788 = v711[1];
              v786 = true;
              
              break;
              }
            }
          stdlib.assert(v786, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:91:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:93:30:application call to [unknown function] (defined at: ./index.rsh:93:30:function exp)'],
            msg: 'Unauthorized! You have not made any bid in this auction.',
            who: 'Creator'
            });
          const v790 = stdlib.addressEq(v596, v537);
          const v791 = v790 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v792 = [v537, v536, v791];
          await txn3.getOutput('Bidder_seeBids', 'v792', ctc9, v792);
          const cv536 = v536;
          const cv537 = v537;
          const cv538 = v538;
          const cv539 = v598;
          const cv540 = v539;
          const cv545 = v545;
          const cv546 = v546;
          
          v536 = cv536;
          v537 = cv537;
          v538 = cv538;
          v539 = cv539;
          v540 = cv540;
          v545 = cv545;
          v546 = cv546;
          
          continue;
          break;
          }
        }}
    
    }
  const v808 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
  const v809 = v808[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
  ;
  ;
  const v827 = stdlib.addressEq(v537, v504);
  if (v827) {
    stdlib.protect(ctc0, await interact.seeWinner(v537, v536, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2')), {
      at: './index.rsh:29:27:application',
      fs: ['at ./index.rsh:28:11:application call to [unknown function] (defined at: ./index.rsh:28:36:function exp)', 'at ./index.rsh:114:18:application call to "seeWinner" (defined at: ./index.rsh:27:50:function exp)'],
      msg: 'seeWinner',
      who: 'Creator'
      });
    
    }
  else {
    stdlib.protect(ctc0, await interact.seeWinner(v537, v536, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3')), {
      at: './index.rsh:29:27:application',
      fs: ['at ./index.rsh:28:11:application call to [unknown function] (defined at: ./index.rsh:28:36:function exp)', 'at ./index.rsh:117:18:application call to "seeWinner" (defined at: ./index.rsh:27:50:function exp)'],
      msg: 'seeWinner',
      who: 'Creator'
      });
    
    }
  return;
  
  
  
  
  };
export async function Observer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Observer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Observer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Bidder_makeBid0_65: ctc4,
    Bidder_seeBids0_65: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc1, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v490 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v491 = [v490];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc3, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v505, v506, v507], secs: v509, time: v508, didSend: v35, from: v504 } = txn1;
  const v510 = v491[stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '0')];
  const v512 = v510[stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '1')];
  const v513 = v510[stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '2')];
  const v514 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v512, v513];
  const v515 = stdlib.Array_set(v491, stdlib.checkedBigNumberify('./index.rsh:39:13:dot', stdlib.UInt_max, '0'), v514);
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v519, time: v518, didSend: v42, from: v517 } = txn2;
  ;
  const v520 = v515[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '0')];
  const v521 = v520[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '0')];
  const v522 = stdlib.add(v521, stdlib.checkedBigNumberify('./index.rsh:42:19:decimal', stdlib.UInt_max, '1'));
  const v525 = v520[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '1')];
  const v526 = v520[stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '2')];
  const v527 = [v522, v525, v526];
  const v528 = stdlib.Array_set(v515, stdlib.checkedBigNumberify('./index.rsh:42:13:dot', stdlib.UInt_max, '0'), v527);
  ;
  const v529 = stdlib.addressEq(v504, v517);
  stdlib.assert(v529, {
    at: './index.rsh:42:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Observer'
    });
  const v535 = stdlib.add(v508, v506);
  let v536 = v507;
  let v537 = v504;
  let v538 = true;
  let v539 = v518;
  let v540 = v508;
  let v545 = v528;
  let v546 = stdlib.checkedBigNumberify('./index.rsh:33:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v551 = stdlib.gt(v535, v540);
    
    return v551;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v535],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v804, time: v803, didSend: v421, from: v802 } = txn4;
      ;
      const v805 = stdlib.addressEq(v504, v802);
      stdlib.assert(v805, {
        at: './index.rsh:101:19:dot',
        fs: ['at ./index.rsh:100:31:application call to [unknown function] (defined at: ./index.rsh:100:31:function exp)'],
        msg: 'sender correct',
        who: 'Observer'
        });
      const cv536 = v536;
      const cv537 = v537;
      const cv538 = v538;
      const cv539 = v803;
      const cv540 = v539;
      const cv545 = v545;
      const cv546 = v546;
      
      v536 = cv536;
      v537 = cv537;
      v538 = cv538;
      v539 = cv539;
      v540 = cv540;
      v545 = cv545;
      v546 = cv546;
      
      continue;
      }
    else {
      const {data: [v597], secs: v599, time: v598, didSend: v297, from: v596 } = txn3;
      switch (v597[0]) {
        case 'Bidder_makeBid0_65': {
          const v600 = v597[1];
          undefined /* setApiDetails */;
          const v605 = v600[stdlib.checkedBigNumberify('./index.rsh:55:12:spread', stdlib.UInt_max, '0')];
          const v606 = stdlib.addressEq(v596, v504);
          const v607 = v606 ? false : true;
          stdlib.assert(v607, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:56:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:55:41:application call to [unknown function] (defined at: ./index.rsh:55:41:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:55:41:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:52:67:function exp)'],
            msg: 'The creator of the bid cannot make another bid',
            who: 'Observer'
            });
          const v616 = stdlib.add(v546, v605);
          ;
          const v623 = stdlib.gt(v605, v536);
          if (v623) {
            const v624 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v596), null);
            let v625;
            switch (v624[0]) {
              case 'None': {
                const v626 = v624[1];
                v625 = v605;
                
                break;
                }
              case 'Some': {
                const v627 = v624[1];
                const v628 = stdlib.add(v627, v605);
                v625 = v628;
                
                break;
                }
              }
            await stdlib.mapSet(map0, v596, v625);
            stdlib.protect(ctc0, await interact.seeOutcome(v596, v605), {
              at: './index.rsh:72:34:application',
              fs: ['at ./index.rsh:71:17:application call to [unknown function] (defined at: ./index.rsh:71:42:function exp)', 'at ./index.rsh:58:38:application call to [unknown function] (defined at: ./index.rsh:58:38:function exp)'],
              msg: 'seeOutcome',
              who: 'Observer'
              });
            
            if (v538) {
              const v653 = [v596, v605, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              await txn3.getOutput('Bidder_makeBid', 'v653', ctc8, v653);
              const cv536 = v605;
              const cv537 = v596;
              const cv538 = false;
              const cv539 = v598;
              const cv540 = v539;
              const cv545 = v545;
              const cv546 = v616;
              
              v536 = cv536;
              v537 = cv537;
              v538 = cv538;
              v539 = cv539;
              v540 = cv540;
              v545 = cv545;
              v546 = cv546;
              
              continue;}
            else {
              const v637 = stdlib.sub(v616, v536);
              ;
              const v638 = [v596, v605, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              await txn3.getOutput('Bidder_makeBid', 'v638', ctc8, v638);
              const cv536 = v605;
              const cv537 = v596;
              const cv538 = false;
              const cv539 = v598;
              const cv540 = v539;
              const cv545 = v545;
              const cv546 = v637;
              
              v536 = cv536;
              v537 = cv537;
              v538 = cv538;
              v539 = cv539;
              v540 = cv540;
              v545 = cv545;
              v546 = cv546;
              
              continue;}}
          else {
            const v668 = [v537, v536, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
            await txn3.getOutput('Bidder_makeBid', 'v668', ctc8, v668);
            const cv536 = v536;
            const cv537 = v537;
            const cv538 = v538;
            const cv539 = v598;
            const cv540 = v539;
            const cv545 = v545;
            const cv546 = v616;
            
            v536 = cv536;
            v537 = cv537;
            v538 = cv538;
            v539 = cv539;
            v540 = cv540;
            v545 = cv545;
            v546 = cv546;
            
            continue;}
          break;
          }
        case 'Bidder_seeBids0_65': {
          const v701 = v597[1];
          undefined /* setApiDetails */;
          const v711 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v596), null);
          let v712;
          switch (v711[0]) {
            case 'None': {
              const v713 = v711[1];
              v712 = false;
              
              break;
              }
            case 'Some': {
              const v714 = v711[1];
              v712 = true;
              
              break;
              }
            }
          stdlib.assert(v712, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:91:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:90:32:application call to [unknown function] (defined at: ./index.rsh:90:32:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:90:32:function exp)', 'at ./index.rsh:52:67:application call to [unknown function] (defined at: ./index.rsh:52:67:function exp)'],
            msg: 'Unauthorized! You have not made any bid in this auction.',
            who: 'Observer'
            });
          ;
          let v786;
          switch (v711[0]) {
            case 'None': {
              const v787 = v711[1];
              v786 = false;
              
              break;
              }
            case 'Some': {
              const v788 = v711[1];
              v786 = true;
              
              break;
              }
            }
          stdlib.assert(v786, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:91:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:93:30:application call to [unknown function] (defined at: ./index.rsh:93:30:function exp)'],
            msg: 'Unauthorized! You have not made any bid in this auction.',
            who: 'Observer'
            });
          const v790 = stdlib.addressEq(v596, v537);
          const v791 = v790 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v792 = [v537, v536, v791];
          await txn3.getOutput('Bidder_seeBids', 'v792', ctc8, v792);
          const cv536 = v536;
          const cv537 = v537;
          const cv538 = v538;
          const cv539 = v598;
          const cv540 = v539;
          const cv545 = v545;
          const cv546 = v546;
          
          v536 = cv536;
          v537 = cv537;
          v538 = cv538;
          v539 = cv539;
          v540 = cv540;
          v545 = cv545;
          v546 = cv546;
          
          continue;
          break;
          }
        }}
    
    }
  const v808 = v545[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
  const v809 = v808[stdlib.checkedBigNumberify('./index.rsh:105:23:application', stdlib.UInt_max, '0')];
  ;
  ;
  const v827 = stdlib.addressEq(v537, v504);
  if (v827) {
    stdlib.protect(ctc0, await interact.seeWinner(v537, v536, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2')), {
      at: './index.rsh:29:27:application',
      fs: ['at ./index.rsh:28:11:application call to [unknown function] (defined at: ./index.rsh:28:36:function exp)', 'at ./index.rsh:114:18:application call to "seeWinner" (defined at: ./index.rsh:27:50:function exp)'],
      msg: 'seeWinner',
      who: 'Observer'
      });
    
    }
  else {
    stdlib.protect(ctc0, await interact.seeWinner(v537, v536, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3')), {
      at: './index.rsh:29:27:application',
      fs: ['at ./index.rsh:28:11:application call to [unknown function] (defined at: ./index.rsh:28:36:function exp)', 'at ./index.rsh:117:18:application call to "seeWinner" (defined at: ./index.rsh:27:50:function exp)'],
      msg: 'seeWinner',
      who: 'Observer'
      });
    
    }
  return;
  
  
  
  
  };
export async function Bidder_makeBid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_makeBid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_makeBid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Bidder_makeBid4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_seeBids(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_seeBids expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_seeBids expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Bidder_seeBids4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_makeBid(uint64)(address,uint64,uint64)`, `Bidder_seeBids()(address,uint64,uint64)`],
    pure: [],
    sigs: [`Bidder_makeBid(uint64)(address,uint64,uint64)`, `Bidder_seeBids()(address,uint64,uint64)`]
    },
  appApproval: `BiAMAAEECCggMAmvqYyLDllyoI0GJgQBAAABAQgAAAAAAAAAASI1ADEYQQSwKWRJIls1ASVbNQIxGSMSQQAKMQAoIQevZkIEfTYaABdJQQAyIjUEIzUGSSEIDEAAESEIEkQpNf8qNP9QJa9QQgCSge2Ly8ICEkQ2GgE1/yg0/1BCAH42GgIXNQQ2GgM2GgEXSYEDDEACUEkkDEAAYyQSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEEWzX+gASRJzTzsDIGNP4PRDT/MQASRDT/NAMhBVs0/jQDIQZbNANXOCA0A1dYARcyBjQDIQlbNANXYRE0AyEKW0IC+UgkNAESRDQESSISTDQCEhFEKGRJNQNJSkpKSVcAIDX/IQVbNf4hBFs1/SEGWzX8VzggNftXWAEXNfohCVs1+VdhETX4IQpbNfdJNQU19oAEkfGnmjT2ULAyBjT9DEQ09iJVQAELNPZXAQg19TT1FzX0MQA0/xNENPc09Ag18zT0iAOHNPQ0/A1BALAxAIgDa0k18SJVQAAHNPQ18kIADzTxI1tJNfA09Ag18kIAADEAKCo08hZQZjT6QQA2gAgAAAAAAAACjTEANPQWUCWvUFCwMQA09BZQJa9QNQc0/zT+NP009DEAIjIGNPk0+DTzQgIHsSKyATT8sggjshA0+7IHs4AIAAAAAAAAAn4xADT0FlAlr1BQsDEANPQWUCWvUDUHNP80/jT9NPQxACIyBjT5NPg08zT8CUIBvoAIAAAAAAAAApw0+zT8FlArUFCwNPs0/BZQK1A1BzT/NP40/TT8NPs0+jIGNPk0+DTzQgGJMQCIAoZJNfUiVUAABiI19EIABiM19EIAADT0RDT1IlVAAAYiNfNCAAYjNfNCAAA080SACAAAAAAAAAMYNPs0/BZQIyIxADT7Ek0WUFCwNPs0/BZQIyIxADT7Ek0WUDUHNP80/jT9NPw0+zT6MgY0+TT4NPdCARJJIwxAAHcjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQVbNf6BOFs1/VdAETX8gASai5F0sDT8VwARNfsjNP6IAfM0/zEAEkQ0/zT+NP00AyEEWwg0AyEGWzT/IzIGNP00+yJbIwgWNPtXCAhQNPtXEAFQIkIAlUghC4gBoCI0ARJENARJIhJMNAISEURJNQVJSSJbNf8lWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwgRGvSTX8VwARNfslrzT7VwgIUDT7VxABUDX6IQuIAUuxIrIBIrISJLIQMgqyFDT/shGzMQA0/xZQNP4WUDT9FlAyBhZQNPpQKEsBVwBRZ0gjNQEyBjUCQgCwNf81/jX9Nfw1+zX6Nfk1+DX3NfY0+DT9DUEANTT2NPcWUDT4FlA0+RZQNPpQNPsWUQcIUDT8FlA0/lA0/xZQKEsBVwB6Z0gkNQEyBjUCQgBfsSKyATT+VwARIluyEiSyEDT6shQ097IRs7EisgE0/7III7IQNPayB7OxIrIBIrISJLIQMgmyFTIKshQ097IRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghB6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 122,
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
                "name": "v505",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v506",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v507",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v505",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v506",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v507",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
        "internalType": "struct T10",
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
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_Bidder_makeBid0_65",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bidder_seeBids0_65",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v597",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
        "internalType": "struct T10",
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v638",
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v653",
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v668",
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v792",
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
    "name": "Bidder_makeBid",
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T15",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bidder_seeBids",
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T15",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
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
        "internalType": "struct T10",
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
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_Bidder_makeBid0_65",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bidder_seeBids0_65",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v597",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
        "internalType": "struct T10",
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
  Bytecode: `0x60806040526040516200243b3803806200243b833981016040819052620000269162000429565b6000805543600355620000386200024e565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f89290620001a1565b60608201526200010b3415600762000224565b62000115620002b5565b33815260208084018051516001600160a01b0316828401528051820151604080850191909152905181015160608085019190915243608085018190529085015160a08501526001600081905555516200017191839101620004eb565b6040516020818303038152906040526002908051906020019062000197929190620002ff565b50505050620005dd565b620001ab6200038e565b60005b60018110156200020157848160018110620001cd57620001cd620004d5565b6020020151828260018110620001e757620001e7620004d5565b602002015280620001f88162000576565b915050620001ae565b5081818460018110620002185762000218620004d5565b60200201529392505050565b816200024a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152815260208101620002816200038e565b81526040805160608101825260008082526020828101829052928201529101908152602001620002b06200038e565b905290565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001620002b06200038e565b8280546200030d90620005a0565b90600052602060002090601f0160209004810192826200033157600085556200037c565b82601f106200034c57805160ff19168380011785556200037c565b828001600101855582156200037c579182015b828111156200037c5782518255916020019190600101906200035f565b506200038a929150620003db565b5090565b60405180602001604052806001905b620003c4604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200039d5790505090565b5b808211156200038a5760008155600101620003dc565b604051606081016001600160401b03811182821017156200042357634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200043d57600080fd5b604080519081016001600160401b03811182821017156200046e57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200048857600080fd5b62000492620003f2565b60208501519092506001600160a01b0381168114620004b057600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151818501526080808601519085015260a0858101516101008601949291860160005b60018110156200056a578251805183528581015186840152860151151586830152918401919083019060010162000538565b50505050505092915050565b60006000198214156200059957634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620005b557607f821691505b60208210811415620005d757634e487b7160e01b600052602260045260246000fd5b50919050565b611e4e80620005ed6000396000f3fe6080604052600436106100845760003560e01c8063832307571161005657806383230757146101065780639afd0bea1461011b578063a7661d541461012e578063ab53f2c614610141578063b97808951461016457005b80631e93b0f11461008d5780632c10a159146100b157806336f1ede4146100c45780633bc5b7bf146100d957005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf36600461171b565b610177565b6100cc61019b565b6040516100a89190611733565b3480156100e557600080fd5b506100f96100f4366004611772565b6101d1565b6040516100a891906117c3565b34801561011257600080fd5b5060015461009e565b61008b6101293660046117f3565b6101fd565b61008b61013c36600461171b565b61021d565b34801561014d57600080fd5b5061015661023d565b6040516100a8929190611831565b6100cc61017236600461186b565b6102da565b61017f6113dc565b6101976101913684900384018461193b565b82610317565b5050565b6101a3611401565b6101ab61142b565b602081015151600190526101bd6113dc565b6101c78282610589565b6020015192915050565b60408051606081018252600080825260208201819052918101919091526101f782610d22565b92915050565b6102056113dc565b61019761021736849003840184611991565b82610589565b6102256113dc565b6101976102373684900384018461193b565b82610df5565b60006060600054600280805461025290611a36565b80601f016020809104026020016040519081016040528092919081815260200182805461027e90611a36565b80156102cb5780601f106102a0576101008083540402835291602001916102cb565b820191906000526020600020905b8154815290600101906020018083116102ae57829003601f168201915b50505050509050915091509091565b6102e2611401565b6102ea61142b565b602081810180515160009052515101518390526103056113dc565b61030f8282610589565b519392505050565b610327600160005414600b610fda565b815161034290158061033b57508251600154145b600c610fda565b60008080556002805461035490611a36565b80601f016020809104026020016040519081016040528092919081815260200182805461038090611a36565b80156103cd5780601f106103a2576101008083540402835291602001916103cd565b820191906000526020600020905b8154815290600101906020018083116103b057829003601f168201915b50505050508060200190518101906103e59190611b0a565b905061040e60408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161046134156008610fda565b60a0820151515161047490600190611bc8565b81515260a08201805151602090810151835182015290515160409081015183519015159101528201516104b5906104ae9033906001611000565b6009610fda565b81516104cd906001600160a01b03163314600a610fda565b6104d5611445565b825181516001600160a01b03918216905260208085015183519216910152604083015160808401516105079190611bc8565b81516040908101919091526060808501516020808501805192909252865182516001600160a01b03909116910152805160019301929092528151439101526080808501519151015260a083015182516105639190600090611018565b60208201805160a0019190915251600060c0909101526105828161108c565b5050505050565b6105996004600054146012610fda565b81516105b49015806105ad57508251600154145b6013610fda565b6000808055600280546105c690611a36565b80601f01602080910402602001604051908101604052809291908181526020018280546105f290611a36565b801561063f5780601f106106145761010080835404028352916020019161063f565b820191906000526020600020905b81548152906001019060200180831161062257829003601f168201915b50505050508060200190518101906106579190611be0565b9050610661611475565b610672826040015143106014610fda565b7f39ae3ba5ee3db2e9c76c06676722712e4f649f643eb75593d77bfa217c7b420033856040516106a3929190611c7d565b60405180910390a160006020850151515160018111156106c5576106c561178f565b1415610afb57602084810151510151815281516106fc906001600160a01b031633146106f25760016106f5565b60005b600d610fda565b80515161010083015161070f9190611bc8565b6020820152805151610724903414600e610fda565b606082015181515111156109f257600061073d33610d22565b51600181111561074f5761074f61178f565b14156107625780515160408201526107ab565b600161076d33610d22565b51600181111561077f5761077f61178f565b14156107ab5761078e33610d22565b60400151606082018190528151516107a591611bc8565b60408201525b3360009081526004602052604090819020805460ff1916600190811782559183015191015560a0820151156108bf5760a08101805133905281515181516020015280516000604091820152905190517fecdfd40d162aa429458f690b4ca216f936cda0c093fa83857b64b62bb81cca559161082591611733565b60405180910390a160a0810151835261083c611445565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152835151828401805191909152805133908401528051600092019190915280514360609091015260c08086015182516080015260e0860151825160a00152918401519051909101526108b98161108c565b50610d1c565b81608001516001600160a01b03166108fc83606001519081150290604051600060405180830381858888f19350505050158015610900573d6000803e3d6000fd5b5060808101805133905281515181516020015280516000604091820152905190517f5411b852554181324cdb28db88a0d9835b2bccf3ace39f6d044aec0bb930e9849161094c91611733565b60405180910390a160808101518352610963611445565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152835151828401805191909152805133908401528051600092019190915280514360609182015260c086015182516080015260e0860151915160a00191909152840151908301516109e09190611ccf565b602082015160c001526108b98161108c565b608082015160c0820180516001600160a01b03909216909152606083015181516020015280516001604091820152905190517f79698e751ae75fa75abd3aeca388899ffbe6e717247d6cbd13ca0a5fa6471f8591610a4f91611733565b60405180910390a160c08101518352610a66611445565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151838601805191909152608080890151825196169585019590955260a080890151825190151594019390935280514392019190915260c08088015182519095019490945260e0870151815190920191909152908401519051909101526108b98161108c565b6001602085015151516001811115610b1557610b1561178f565b1415610d1c57610b2433610d22565b60e08201819052516000906001811115610b4057610b4061178f565b1415610b53576000610100820152610b7b565b600160e0820151516001811115610b6c57610b6c61178f565b1415610b7b5760016101008201525b610b8b816101000151600f610fda565b610b9734156010610fda565b600060e0820151516001811115610bb057610bb061178f565b1415610bc3576000610120820152610beb565b600160e0820151516001811115610bdc57610bdc61178f565b1415610beb5760016101208201525b610bfb8161012001516011610fda565b608082018051610140830180516001600160a01b03928316905260608501519051602001529051163314610c30576001610c33565b60005b610140820180516040908101929092525190517ff11119398206e7d1b0114efe33e741bf4a4215627946f75a0474ef8574658ed491610c7191611733565b60405180910390a16101408101516020840152610c8c611445565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845182015260608087015183860180519190915260808089015182519616959094019490945260a080880151855190151593019290925283514391015260c08087015184519093019290925260e0860151835190910152610100850151915101526108b98161108c565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610d6e57610d6e61178f565b1415610de5576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610daf57610daf61178f565b6001811115610dc057610dc061178f565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b610e056004600054146017610fda565b8151610e20901580610e1957508251600154145b6018610fda565b600080805560028054610e3290611a36565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5e90611a36565b8015610eab5780601f10610e8057610100808354040283529160200191610eab565b820191906000526020600020905b815481529060010190602001808311610e8e57829003601f168201915b5050505050806020019051810190610ec39190611be0565b9050610ed781604001514310156019610fda565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a1610f2a34156015610fda565b8051610f42906001600160a01b031633146016610fda565b610f4a611445565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015260608086015183860180519190915260808088015182519616959094019490945260a080870151855190151593019290925283514391015260c08086015184519093019290925260e085015183519091015261010084015191510152610d1c8161108c565b816101975760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061100e838530856111e2565b90505b9392505050565b611020611504565b60005b600181101561106c5784816001811061103e5761103e611b9c565b602002015182826001811061105557611055611b9c565b60200201528061106481611ce6565b915050611023565b508181846001811061108057611080611b9c565b60200201529392505050565b6020810151608001518151604001511115611164576110a961154f565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152818501805151606080870191909152815184015190941660808601528051820151151560a08087019190915281519094015160c08087019190915281519094015160e08601525190920151610100840152600460005543600155905161113b91839101611d3f565b6040516020818303038152906040526002908051906020019061115f9291906115be565b505050565b8051602090810151818301519182015160a090920151515161118692906112bc565b805151602082015160c001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156111c8573d6000803e3d6000fd5b50600080805560018190556111df90600290611642565b50565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161124991611ddf565b60006040518083038185875af1925050503d8060008114611286576040519150601f19603f3d011682016040523d82523d6000602084013e61128b565b606091505b509150915061129c828260016112d0565b50808060200190518101906112b19190611dfb565b979650505050505050565b6112c783838361130b565b61115f57600080fd5b606083156112df575081611011565b8251156112ef5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610ff7565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161136a91611ddf565b60006040518083038185875af1925050503d80600081146113a7576040519150601f19603f3d011682016040523d82523d6000602084013e6113ac565b606091505b50915091506113bd828260026112d0565b50808060200190518101906113d29190611dfb565b9695505050505050565b60405180604001604052806113ef611401565b81526020016113fc611401565b905290565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b6040518060400160405280600081526020016113fc61167c565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016113fc61168f565b60408051610180810190915260006101608201908152819081526020016000815260200160008152602001600081526020016114af611401565b81526020016114bc611401565b81526020016114c9611401565b8152604080516060810182526000808252602082810182905292820152910190815260006020820181905260408201526060016113fc611401565b60405180602001604052806001905b611539604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816115135790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600015158152602001600081526020016115b1611504565b8152602001600081525090565b8280546115ca90611a36565b90600052602060002090601f0160209004810192826115ec5760008555611632565b82601f1061160557805160ff1916838001178555611632565b82800160010185558215611632579182015b82811115611632578251825591602001919060010190611617565b5061163e9291506116d0565b5090565b50805461164e90611a36565b6000825580601f1061165e575050565b601f0160209004906000526020600020908101906111df91906116d0565b60405180602001604052806113fc6116e5565b6040518060e001604052806000815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016115b1611504565b5b8082111561163e57600081556001016116d1565b6040805160608101909152806000815260200161170e6040518060200160405280600081525090565b8152600060209091015290565b60006040828403121561172d57600080fd5b50919050565b81516001600160a01b03168152602080830151908201526040918201519181019190915260600190565b6001600160a01b03811681146111df57600080fd5b60006020828403121561178457600080fd5b81356110118161175d565b634e487b7160e01b600052602160045260246000fd5b600281106111df57634e487b7160e01b600052602160045260246000fd5b815160608201906117d3816117a5565b808352506020830151151560208301526040830151604083015292915050565b60006080828403121561172d57600080fd5b60005b83811015611820578181015183820152602001611808565b83811115610d1c5750506000910152565b8281526040602082015260008251806040840152611856816060850160208701611805565b601f01601f1916919091016060019392505050565b60006020828403121561187d57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156118bd576118bd611884565b60405290565b6040516020810167ffffffffffffffff811182821017156118bd576118bd611884565b6040516060810167ffffffffffffffff811182821017156118bd576118bd611884565b604051610120810167ffffffffffffffff811182821017156118bd576118bd611884565b80151581146111df57600080fd5b60006040828403121561194d57600080fd5b6040516040810181811067ffffffffffffffff8211171561197057611970611884565b6040528235815260208301356119858161192d565b60208201529392505050565b600081830360808112156119a457600080fd5b6119ac61189a565b833581526060601f19830112156119c257600080fd5b6119ca6118c3565b6119d26118e6565b6020860135600281106119e457600080fd5b81526020603f19850112156119f857600080fd5b611a006118c3565b60408701358152602082015260608601359350611a1c8461192d565b604081019390935291825260208101919091529392505050565b600181811c90821680611a4a57607f821691505b6020821081141561172d57634e487b7160e01b600052602260045260246000fd5b8051610df08161175d565b8051610df08161192d565b600082601f830112611a9257600080fd5b611a9a6118c3565b80606080850186811115611aad57600080fd5b855b81811015611afe57828189031215611ac75760008081fd5b611acf6118e6565b8151815260208083015181830152604080840151611aec8161192d565b90830152908652909401938201611aaf565b50919695505050505050565b60006101008284031215611b1d57600080fd5b60405160c0810181811067ffffffffffffffff82111715611b4057611b40611884565b6040528251611b4e8161175d565b81526020830151611b5e8161175d565b80602083015250604083015160408201526060830151606082015260808301516080820152611b908460a08501611a81565b60a08201529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611bdb57611bdb611bb2565b500190565b60006101608284031215611bf357600080fd5b611bfb611909565b611c0483611a6b565b8152611c1260208401611a6b565b60208201526040830151604082015260608301516060820152611c3760808401611a6b565b6080820152611c4860a08401611a76565b60a082015260c083015160c0820152611c648460e08501611a81565b60e0820152610140929092015161010083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190611ca9816117a5565b806040850152506020810151516060840152604081015115156080840152509392505050565b600082821015611ce157611ce1611bb2565b500390565b6000600019821415611cfa57611cfa611bb2565b5060010190565b8060005b6001811015610d1c578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101611d05565b81516001600160a01b03168152602080830151610160830191611d6c908401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151611d9b60808401826001600160a01b03169052565b5060a0830151611daf60a084018215159052565b5060c083015160c083015260e0830151611dcc60e0840182611d01565b5061010083015161014083015292915050565b60008251611df1818460208701611805565b9190910192915050565b600060208284031215611e0d57600080fd5b81516110118161192d56fea26469706673582212201bc86b390afafb0cdacdeb30cbd642d679670b1e4b1e2c68a53eaf79510ffe3e64736f6c634300080c0033`,
  BytecodeLen: 9275,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:40:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:120:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:52:67:after expr stmt semicolon',
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
  "Bidder_makeBid": Bidder_makeBid,
  "Bidder_seeBids": Bidder_seeBids,
  "Creator": Creator,
  "Observer": Observer
  };
export const _APIs = {
  Bidder: {
    makeBid: Bidder_makeBid,
    seeBids: Bidder_seeBids
    }
  };
