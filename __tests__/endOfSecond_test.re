open Jest;

open Js.Date;

describe("endOfSecond", () =>
  ExpectJs.(
    test("returns the date with the time setted to the last millisecond before a second ends", () => {
      let date =
        makeWithYMDHMS(~year=2018., ~month=0., ~date=1., ~hours=16., ~minutes=50., ~seconds=10., ())
        ->setMilliseconds(423.)
        ->fromFloat;
      let expectedDate =
        makeWithYMDHMS(~year=2018., ~month=0., ~date=1., ~hours=16., ~minutes=50., ~seconds=10., ())
        ->setMilliseconds(999.)
        ->fromFloat;

      date->ReDate.endOfSecond->expect->toEqual(expectedDate, _);
    })
  )
);