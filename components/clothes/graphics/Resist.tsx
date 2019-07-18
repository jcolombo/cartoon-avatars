import * as React from 'react'

export interface Props {
  maskID: string
  color?:string
}

export class Resist extends React.Component<Props> {
  static optionValue = 'Resist'

  render () {
    const fillColor = this.props.color || '#FFFFFF'
    return (
        <g
            id='Clothing/Graphic/Resist'
            mask={`url(#${this.props.maskID})`}
            strokeWidth='1'
            fillRule='evenodd'>
          <g transform='translate(77.000000, 58.000000)' id='Resist'>
            <g transform='translate(3.000000, 9.000000)'>
              <path
                  d='M102.565245,21.0710109 C99.4833509,20.4054313 97.3728781,24.6059197 100.65303,25.85541 C103.46796,26.9271503 105.497722,21.7103865 102.565245,21.0710109'
                  id='!'
                  fill={fillColor}
              />
              <path
                  d='M101.191001,18 C104.847558,18 103.499462,12.0185653 103.512139,10.034892 C103.52569,7.89835492 105.057378,1.43936922 102.622588,0.300988793 C98.4060734,-1.67043963 99.5622709,6.62567562 99.5876242,8.26886181 C99.6156003,10.0850565 99.7546063,11.9885455 99.3594446,13.7770905 C99.009744,15.3574722 98.2303489,18 101.191001,18'
                  id='H'
                  fill={fillColor}
              />
              <path
                  d='M96.057932,1.97392328 C94.9756601,1.35173361 93.2567577,1.65427333 92.0711316,1.60022061 C90.7220251,1.53916824 89.3807782,1.40539746 88.0356015,1.30662485 C85.8592683,1.14718875 83.080101,0.743543202 80.9175222,1.23857286 C79.6922049,1.51933595 78.5800664,2.46389764 79.1565707,3.84671419 C79.777482,5.33646958 81.4602301,4.95187859 82.7370279,4.87682696 C83.3217848,4.84221766 84.7703158,4.58750876 85.3421043,4.78816493 C86.3390991,5.13853549 85.9154647,4.67967061 86.1430012,5.85522022 C86.491969,7.66229234 86.2825097,9.85512207 86.2675764,11.6929148 C86.2420326,14.8668599 86.2322081,18.0567485 86.1650082,21.2287493 C86.1386784,22.4645735 85.7244756,23.8606116 86.9218911,24.6768466 C87.9196719,25.3569777 89.1379155,24.9023904 89.6550795,23.8835548 C90.1694927,22.8705522 89.6806234,20.8169375 89.6259989,19.6876632 C89.5599779,18.3406226 89.4900272,17.0122476 89.5293254,15.6628738 C89.6330726,12.0775058 89.8110933,8.49563763 89.8971563,4.90910305 C90.8399197,4.95537841 91.8188373,4.92737987 92.7525621,5.05842857 C93.4359574,5.15409023 94.4184119,5.59351169 95.0754775,5.55890239 C96.9743656,5.45818543 97.7689748,2.97175996 96.057932,1.97392328'
                  id='C'
                  fill={fillColor}
              />
              <path
                  d='M67.7216119,8.81264097 C67.7100258,8.75972031 67.6397369,8.1691564 67.7216119,8.81264097 M67.6853088,8.53730013 C67.6887847,8.56222653 67.685695,8.5449698 67.6853088,8.53730013 M69.1169633,5.42725256 C72.533315,1.44593148 73.7004204,9.77441647 76.3625176,9.42199554 C80.623109,8.85827545 75.4217272,2.46944776 73.6942412,1.64649312 C70.1786354,-0.0289443454 67.0886252,1.72587411 65.4167525,4.9126183 C63.3188978,8.91234656 64.6466637,11.6208874 68.6751471,13.3572987 C70.1461943,13.9915796 75.714469,15.8848355 74.2051877,18.3157346 C73.4451402,19.5398125 70.6791544,19.6445033 69.5047111,19.402142 C67.1492591,18.916269 67.5161519,17.3159942 66.3699015,15.8288469 C65.3371947,14.4885737 63.3397528,14.8820273 63.028087,16.6100019 C62.7828481,17.9675319 64.198282,20.0348891 65.1433208,20.9897619 C67.3759602,23.2457927 71.1831493,23.4271802 74.0298516,22.3998291 C78.4155727,20.816811 78.9473743,16.6909168 75.8357368,13.4953526 C74.0870096,11.6995014 71.9026455,11.154572 69.7225296,10.0773681 C67.0781977,8.7712248 67.5725376,7.68673472 69.1169633,5.42725256'
                  id='A'
                  fill={fillColor}
              />
              <path
                  d='M58.749962,20.5676943 C58.1855671,15.7434329 58.0538346,10.8505093 57.9696387,6.00460433 C57.9426476,4.45075032 58.6758373,0.798596322 56.5169562,0.139962235 C53.6023258,-0.749287073 53.9890632,2.83233897 54.0502966,4.30372379 C54.255348,9.21679823 54.8922562,14.0929294 55.1210758,19.0000333 C55.193992,20.5568726 54.6924419,23.5739018 56.9520358,23.9463193 C59.7027058,24.4000865 58.9598476,21.8648117 58.749962,20.5676943'
                  id='E'
                  fill={fillColor}
              />
              <path
                  d='M49.4716454,4.67909741 C47.1120678,1.521124 42.3181606,1.01110068 39.382093,3.92183601 C37.3101733,5.97595969 36.00495,10.8410892 37.9661116,13.3252251 C40.0904751,16.016404 45.3211527,13.6574039 46.6913436,16.7080638 C48.3726748,20.4511421 43.9611374,21.8560762 41.6168232,19.3708027 C40.7738094,18.4774087 40.9581453,16.917382 39.7163241,16.3637507 C37.9539791,15.5788077 36.853443,17.2916519 37.2001979,18.7227508 C38.0479082,22.2235205 41.8524287,24.1130716 45.3011927,23.9947614 C49.0689244,23.8650751 50.7028996,21.0184245 50.4641631,17.5957699 C50.1342371,12.8603265 46.4792204,12.1186123 42.4747091,11.597213 C40.7761576,11.3761397 40.5534673,11.3966165 40.6583549,9.64547322 C40.7855505,7.52650643 42.0277631,5.07763608 44.6491681,5.58159221 C46.7551372,5.98657727 46.942604,9.15327227 49.1037564,9.30040167 C52.5998763,9.53853896 50.3604497,5.86712943 49.4716454,4.67909741'
                  id='P'
                  fill={fillColor}
              />
              <path
                  d='M31.7209696,20.4381695 C30.3835461,20.7580967 28.7579173,20.5355712 27.3944988,20.5112208 C26.3407598,20.4924897 22.8201338,20.9379153 22.1329619,20.2148947 C21.3727026,19.4150766 21.6202201,16.9680453 21.5881973,15.9288437 C21.5422351,14.4753101 21.1839563,14.2599024 22.4595946,13.9298603 C23.2085518,13.7361807 24.3674009,13.8332078 25.1415996,13.7976187 C26.6572206,13.727939 28.606845,14.008531 30.0716062,13.7099572 C31.4414292,13.4304891 32.5739067,11.958599 31.3223797,10.7058628 C30.4355361,9.81763391 28.7797682,10.2949024 27.6909924,10.3200021 C25.6573553,10.3664552 23.6222112,10.3555912 21.5881973,10.3915549 C21.5964855,8.82376157 21.5448723,7.2454788 21.6669357,5.68105705 C24.5143291,5.82154032 27.4788884,6.56329201 30.3255283,6.42655496 C31.766555,6.35724988 33.3654353,5.43530497 32.6368221,3.69630934 C32.0121888,2.20606276 30.1149312,2.40985716 28.792954,2.35066687 C27.1398233,2.27611708 25.4848088,2.23790563 23.8313013,2.18096308 C22.6068996,2.13900541 20.8260543,1.73628668 19.6721027,2.28847961 C17.3095724,3.41833976 18.121445,7.29867513 18.1873743,9.39955568 C18.2706336,12.0657409 18.2721406,14.6678658 18.3644416,17.3561538 C18.4484544,19.7885748 18.3271445,22.9972128 21.2159792,23.6808981 C24.1051906,24.364958 27.4611816,23.7142395 30.4084109,23.8565959 C31.6166129,23.9150369 33.2693669,24.2671816 33.8631075,22.8608504 C34.4319834,21.512211 33.1326106,20.086774 31.7209696,20.4381695'
                  id='M'
                  fill={fillColor}
              />
              <path
                  d='M8.41021607,5.87934286 C10.7314099,6.38056324 11.3520318,8.89406466 11.4306011,11.0286326 C11.4842397,12.4898438 11.613048,12.4018284 10.4273316,12.768689 C9.23708235,13.1371074 7.50704692,12.9377097 6.28808963,12.8851342 C3.74516418,12.7756991 4.0526421,12.6070678 4.00353629,9.93973422 C3.99220418,9.31505862 3.52947636,6.4362544 3.89625898,6.02967003 C4.37220759,5.5015777 7.73482232,5.8267673 8.41021607,5.87934286 M13.4870013,20.7181143 C12.1966517,19.2140637 10.9010138,17.7773878 9.45277018,16.4318428 C11.6107816,16.3722571 13.9557729,15.9594416 14.7229567,13.6130136 C15.3711534,11.6307201 14.8079476,8.6132722 14.05474,6.74080322 C13.0612917,4.27092005 10.9928039,2.62238402 8.42003723,2.26253349 C6.62389782,2.01172858 2.14242611,1.58956627 0.799948834,2.97327723 C-0.664537495,4.48161175 0.351952758,8.62222952 0.4422319,10.4701632 C0.602014649,13.7411422 0.486049391,16.987586 0.285471047,20.2550599 C0.220500284,21.3096868 -0.296621662,23.0423437 0.243919977,23.9918195 C0.843766325,25.0456674 2.30296434,25.3089347 3.21255502,24.5288691 C4.19693763,23.6845445 3.74176455,22.6513373 3.68132663,21.5678912 C3.58802559,19.8917044 3.75574082,18.1644997 3.85546339,16.4937651 C5.46348977,17.806207 7.10551249,19.0851563 8.61683821,20.5163799 C10.1096548,21.9300785 11.1809169,23.7184265 12.6076296,25.143419 C13.618076,26.1528699 15.4266807,26.5676327 15.9381366,24.6947742 C16.377067,23.0871303 14.3667507,21.7435326 13.4870013,20.7181143'
                  id='I'
                  fill={fillColor}
              />
            </g>
          </g>
        </g>
    )
  }
}

export default Resist