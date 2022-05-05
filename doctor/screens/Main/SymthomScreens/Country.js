// import { ISABELL_API_KEY } from "@env";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons, images } from "../../../constants";
import CountryPicker from "react-native-country-picker-modal";

const isabelCountries = [
  {
    country_id: "1",
    country_name: "Afghanistan",
    abbreviation: "AF",
    region_id: "17",
  },
  {
    country_id: "2",
    country_name: "Albania",
    abbreviation: "AL",
    region_id: "2",
  },
  {
    country_id: "3",
    country_name: "Algeria",
    abbreviation: "DZ",
    region_id: "4",
  },
  {
    country_id: "4",
    country_name: "Amer.Virgin Is.",
    abbreviation: "VI",
    region_id: "14",
  },
  {
    country_id: "5",
    country_name: "Andorra",
    abbreviation: "AD",
    region_id: "1",
  },
  {
    country_id: "6",
    country_name: "Angola",
    abbreviation: "AO",
    region_id: "3",
  },
  {
    country_id: "7",
    country_name: "Anguilla",
    abbreviation: "AI",
    region_id: "11",
  },
  {
    country_id: "8",
    country_name: "Antarctica",
    abbreviation: "AQ",
    region_id: "1",
  },
  {
    country_id: "9",
    country_name: "Antigua/Barbads",
    abbreviation: "AG",
    region_id: "11",
  },
  {
    country_id: "10",
    country_name: "Argentina",
    abbreviation: "AR",
    region_id: "15",
  },
  {
    country_id: "11",
    country_name: "Armenia",
    abbreviation: "AM",
    region_id: "17",
  },
  {
    country_id: "12",
    country_name: "Aruba",
    abbreviation: "AW",
    region_id: "11",
  },
  {
    country_id: "13",
    country_name: "Australia",
    abbreviation: "AU",
    region_id: "16",
  },
  {
    country_id: "14",
    country_name: "Austria",
    abbreviation: "AT",
    region_id: "1",
  },
  {
    country_id: "15",
    country_name: "Azerbaijan",
    abbreviation: "AZ",
    region_id: "17",
  },
  {
    country_id: "16",
    country_name: "Bahamas",
    abbreviation: "BS",
    region_id: "11",
  },
  {
    country_id: "17",
    country_name: "Bahrain",
    abbreviation: "BH",
    region_id: "17",
  },
  {
    country_id: "18",
    country_name: "Bangladesh",
    abbreviation: "BD",
    region_id: "10",
  },
  {
    country_id: "19",
    country_name: "Barbados",
    abbreviation: "BB",
    region_id: "11",
  },
  {
    country_id: "20",
    country_name: "Belarus",
    abbreviation: "BY",
    region_id: "2",
  },
  {
    country_id: "21",
    country_name: "Belgium",
    abbreviation: "BE",
    region_id: "1",
  },
  {
    country_id: "22",
    country_name: "Belize",
    abbreviation: "BZ",
    region_id: "13",
  },
  {
    country_id: "23",
    country_name: "Benin",
    abbreviation: "BJ",
    region_id: "7",
  },
  {
    country_id: "24",
    country_name: "Bermuda",
    abbreviation: "BM",
    region_id: "11",
  },
  {
    country_id: "25",
    country_name: "Bhutan",
    abbreviation: "BT",
    region_id: "10",
  },
  {
    country_id: "26",
    country_name: "Bolivia",
    abbreviation: "BO",
    region_id: "14",
  },
  {
    country_id: "27",
    country_name: "Bosnia-Herz.",
    abbreviation: "BA",
    region_id: "2",
  },
  {
    country_id: "28",
    country_name: "Botswana",
    abbreviation: "BW",
    region_id: "6",
  },
  {
    country_id: "29",
    country_name: "Bouvet Island",
    abbreviation: "BV",
    region_id: "1",
  },
  {
    country_id: "30",
    country_name: "Brazil",
    abbreviation: "BR",
    region_id: "14",
  },
  {
    country_id: "31",
    country_name: "Brit.Ind.Oc.Ter",
    abbreviation: "IO",
    region_id: "5",
  },
  {
    country_id: "32",
    country_name: "Brit.Virgin Is.",
    abbreviation: "VG",
    region_id: "11",
  },
  {
    country_id: "33",
    country_name: "Brunei Dar-es-S",
    abbreviation: "BN",
    region_id: "8",
  },
  {
    country_id: "34",
    country_name: "Bulgaria",
    abbreviation: "BG",
    region_id: "2",
  },
  {
    country_id: "35",
    country_name: "Burkina-Faso",
    abbreviation: "BF",
    region_id: "7",
  },
  {
    country_id: "240",
    country_name: "Burma",
    abbreviation: "BU",
    region_id: "8",
  },
  {
    country_id: "36",
    country_name: "Burundi",
    abbreviation: "BI",
    region_id: "5",
  },
  {
    country_id: "37",
    country_name: "Cambodia",
    abbreviation: "KH",
    region_id: "8",
  },
  {
    country_id: "38",
    country_name: "Cameroon",
    abbreviation: "CM",
    region_id: "3",
  },
  {
    country_id: "39",
    country_name: "Canada",
    abbreviation: "CA",
    region_id: "12",
  },
  {
    country_id: "40",
    country_name: "Cape Verde",
    abbreviation: "CV",
    region_id: "7",
  },
  {
    country_id: "41",
    country_name: "Cayman Islands",
    abbreviation: "KY",
    region_id: "11",
  },
  {
    country_id: "42",
    country_name: "Central Afr.Rep",
    abbreviation: "CF",
    region_id: "3",
  },
  {
    country_id: "43",
    country_name: "Chad",
    abbreviation: "TD",
    region_id: "3",
  },
  {
    country_id: "44",
    country_name: "Channel Islands",
    abbreviation: "CI",
    region_id: "1",
  },
  {
    country_id: "45",
    country_name: "Chile",
    abbreviation: "CL",
    region_id: "15",
  },
  {
    country_id: "46",
    country_name: "China",
    abbreviation: "CN",
    region_id: "9",
  },
  {
    country_id: "47",
    country_name: "Christmas Islnd",
    abbreviation: "CX",
    region_id: "16",
  },
  {
    country_id: "48",
    country_name: "Coconut Islands",
    abbreviation: "CC",
    region_id: "16",
  },
  {
    country_id: "49",
    country_name: "Colombia",
    abbreviation: "CO",
    region_id: "15",
  },
  {
    country_id: "50",
    country_name: "Comoro",
    abbreviation: "KM",
    region_id: "5",
  },
  {
    country_id: "51",
    country_name: "Congo",
    abbreviation: "CG",
    region_id: "3",
  },
  {
    country_id: "52",
    country_name: "Cook Islands",
    abbreviation: "CK",
    region_id: "16",
  },
  {
    country_id: "53",
    country_name: "Costa Rica",
    abbreviation: "CR",
    region_id: "13",
  },
  {
    country_id: "54",
    country_name: "Croatia",
    abbreviation: "HR",
    region_id: "2",
  },
  {
    country_id: "55",
    country_name: "Cuba",
    abbreviation: "CU",
    region_id: "11",
  },
  {
    country_id: "56",
    country_name: "Cyprus",
    abbreviation: "CY",
    region_id: "17",
  },
  {
    country_id: "57",
    country_name: "Czech Republic",
    abbreviation: "CZ",
    region_id: "2",
  },
  {
    country_id: "58",
    country_name: "Denmark",
    abbreviation: "DK",
    region_id: "1",
  },
  {
    country_id: "59",
    country_name: "Djibouti",
    abbreviation: "DJ",
    region_id: "5",
  },
  {
    country_id: "60",
    country_name: "Dominica",
    abbreviation: "DM",
    region_id: "11",
  },
  {
    country_id: "61",
    country_name: "Dominican Rep.",
    abbreviation: "DO",
    region_id: "11",
  },
  {
    country_id: "241",
    country_name: "East Timor",
    abbreviation: "TI",
    region_id: "8",
  },
  {
    country_id: "62",
    country_name: "Ecuador",
    abbreviation: "EC",
    region_id: "15",
  },
  {
    country_id: "63",
    country_name: "Egypt",
    abbreviation: "EG",
    region_id: "4",
  },
  {
    country_id: "64",
    country_name: "El Salvador",
    abbreviation: "SV",
    region_id: "13",
  },
  {
    country_id: "65",
    country_name: "Equatorial Guin",
    abbreviation: "GQ",
    region_id: "3",
  },
  {
    country_id: "66",
    country_name: "Eritrea",
    abbreviation: "ER",
    region_id: "5",
  },
  {
    country_id: "67",
    country_name: "Estonia",
    abbreviation: "EE",
    region_id: "1",
  },
  {
    country_id: "68",
    country_name: "Ethiopia",
    abbreviation: "ET",
    region_id: "5",
  },
  {
    country_id: "69",
    country_name: "Faeroe Islands",
    abbreviation: "FO",
    region_id: "1",
  },
  {
    country_id: "70",
    country_name: "Falkland Islnds",
    abbreviation: "FK",
    region_id: "15",
  },
  {
    country_id: "71",
    country_name: "Fiji",
    abbreviation: "FJ",
    region_id: "16",
  },
  {
    country_id: "72",
    country_name: "Finland",
    abbreviation: "FI",
    region_id: "1",
  },
  {
    country_id: "73",
    country_name: "France",
    abbreviation: "FR",
    region_id: "1",
  },
  {
    country_id: "75",
    country_name: "French Guinea",
    abbreviation: "GF",
    region_id: "15",
  },
  {
    country_id: "74",
    country_name: "Frenc.Polynesia",
    abbreviation: "PF",
    region_id: "16",
  },
  {
    country_id: "76",
    country_name: "Gabon",
    abbreviation: "GA",
    region_id: "3",
  },
  {
    country_id: "77",
    country_name: "Gambia",
    abbreviation: "GM",
    region_id: "7",
  },
  {
    country_id: "78",
    country_name: "Georgia",
    abbreviation: "GE",
    region_id: "17",
  },
  {
    country_id: "79",
    country_name: "Germany",
    abbreviation: "DE",
    region_id: "1",
  },
  {
    country_id: "80",
    country_name: "Ghana",
    abbreviation: "GH",
    region_id: "7",
  },
  {
    country_id: "81",
    country_name: "Gibraltar",
    abbreviation: "GI",
    region_id: "11",
  },
  {
    country_id: "82",
    country_name: "Greece",
    abbreviation: "GR",
    region_id: "1",
  },
  {
    country_id: "83",
    country_name: "Greenland",
    abbreviation: "GL",
    region_id: "1",
  },
  {
    country_id: "84",
    country_name: "Grenada",
    abbreviation: "GD",
    region_id: "11",
  },
  {
    country_id: "85",
    country_name: "Guadeloupe",
    abbreviation: "GP",
    region_id: "11",
  },
  {
    country_id: "86",
    country_name: "Guam",
    abbreviation: "GU",
    region_id: "9",
  },
  {
    country_id: "87",
    country_name: "Guatemala",
    abbreviation: "GT",
    region_id: "13",
  },
  {
    country_id: "88",
    country_name: "Guinea",
    abbreviation: "GN",
    region_id: "7",
  },
  {
    country_id: "89",
    country_name: "Guinea-Bissau",
    abbreviation: "GW",
    region_id: "7",
  },
  {
    country_id: "90",
    country_name: "Guyana",
    abbreviation: "GY",
    region_id: "15",
  },
  {
    country_id: "91",
    country_name: "Haiti",
    abbreviation: "HT",
    region_id: "11",
  },
  {
    country_id: "92",
    country_name: "Heard/McDon.Isl",
    abbreviation: "HM",
    region_id: "16",
  },
  {
    country_id: "93",
    country_name: "Honduras",
    abbreviation: "HN",
    region_id: "13",
  },
  {
    country_id: "94",
    country_name: "Hong Kong",
    abbreviation: "HK",
    region_id: "9",
  },
  {
    country_id: "95",
    country_name: "Hungary",
    abbreviation: "HU",
    region_id: "2",
  },
  {
    country_id: "96",
    country_name: "Iceland",
    abbreviation: "IS",
    region_id: "1",
  },
  {
    country_id: "97",
    country_name: "India",
    abbreviation: "IN",
    region_id: "10",
  },
  {
    country_id: "98",
    country_name: "Indonesia",
    abbreviation: "ID",
    region_id: "8",
  },
  {
    country_id: "99",
    country_name: "Iran",
    abbreviation: "IR",
    region_id: "17",
  },
  {
    country_id: "100",
    country_name: "Iraq",
    abbreviation: "IQ",
    region_id: "17",
  },
  {
    country_id: "101",
    country_name: "Ireland",
    abbreviation: "IE",
    region_id: "1",
  },
  {
    country_id: "102",
    country_name: "Israel",
    abbreviation: "IL",
    region_id: "17",
  },
  {
    country_id: "103",
    country_name: "Italy",
    abbreviation: "IT",
    region_id: "1",
  },
  {
    country_id: "104",
    country_name: "Ivory Coast",
    abbreviation: "IV",
    region_id: "7",
  },
  {
    country_id: "105",
    country_name: "Jamaica",
    abbreviation: "JM",
    region_id: "11",
  },
  {
    country_id: "106",
    country_name: "Japan",
    abbreviation: "JP",
    region_id: "9",
  },
  {
    country_id: "107",
    country_name: "Jordan",
    abbreviation: "JO",
    region_id: "17",
  },
  {
    country_id: "108",
    country_name: "Kazakhstan",
    abbreviation: "KZ",
    region_id: "17",
  },
  {
    country_id: "109",
    country_name: "Kenya",
    abbreviation: "KE",
    region_id: "5",
  },
  {
    country_id: "110",
    country_name: "Kirghistan",
    abbreviation: "KG",
    region_id: "17",
  },
  {
    country_id: "111",
    country_name: "Kiribati",
    abbreviation: "KI",
    region_id: "16",
  },
  {
    country_id: "112",
    country_name: "Kuwait",
    abbreviation: "KW",
    region_id: "17",
  },
  {
    country_id: "113",
    country_name: "Laos",
    abbreviation: "LA",
    region_id: "8",
  },
  {
    country_id: "114",
    country_name: "Latvia",
    abbreviation: "LV",
    region_id: "2",
  },
  {
    country_id: "115",
    country_name: "Lebanon",
    abbreviation: "LB",
    region_id: "17",
  },
  {
    country_id: "116",
    country_name: "Lesotho",
    abbreviation: "LS",
    region_id: "6",
  },
  {
    country_id: "117",
    country_name: "Liberia",
    abbreviation: "LR",
    region_id: "7",
  },
  {
    country_id: "118",
    country_name: "Libya",
    abbreviation: "LY",
    region_id: "4",
  },
  {
    country_id: "119",
    country_name: "Liechtenstein",
    abbreviation: "LI",
    region_id: "1",
  },
  {
    country_id: "120",
    country_name: "Lithuania",
    abbreviation: "LT",
    region_id: "2",
  },
  {
    country_id: "121",
    country_name: "Luxembourg",
    abbreviation: "LU",
    region_id: "1",
  },
  {
    country_id: "122",
    country_name: "Macau",
    abbreviation: "MO",
    region_id: "9",
  },
  {
    country_id: "123",
    country_name: "Macedonia",
    abbreviation: "MK",
    region_id: "2",
  },
  {
    country_id: "124",
    country_name: "Madagascar",
    abbreviation: "MG",
    region_id: "5",
  },
  {
    country_id: "125",
    country_name: "Malawi",
    abbreviation: "MW",
    region_id: "5",
  },
  {
    country_id: "126",
    country_name: "Malaysia",
    abbreviation: "MY",
    region_id: "8",
  },
  {
    country_id: "127",
    country_name: "Maldives",
    abbreviation: "MV",
    region_id: "10",
  },
  {
    country_id: "128",
    country_name: "Mali",
    abbreviation: "ML",
    region_id: "7",
  },
  {
    country_id: "129",
    country_name: "Malta",
    abbreviation: "MT",
    region_id: "1",
  },
  {
    country_id: "130",
    country_name: "Marshall Islnds",
    abbreviation: "MH",
    region_id: "9",
  },
  {
    country_id: "131",
    country_name: "Martinique",
    abbreviation: "MQ",
    region_id: "11",
  },
  {
    country_id: "132",
    country_name: "Mauritania",
    abbreviation: "MR",
    region_id: "7",
  },
  {
    country_id: "133",
    country_name: "Mauritius",
    abbreviation: "MU",
    region_id: "5",
  },
  {
    country_id: "134",
    country_name: "Mayotte",
    abbreviation: "YT",
    region_id: "1",
  },
  {
    country_id: "135",
    country_name: "Mexico",
    abbreviation: "MX",
    region_id: "13",
  },
  {
    country_id: "136",
    country_name: "Micronesia",
    abbreviation: "FM",
    region_id: "9",
  },
  {
    country_id: "137",
    country_name: "Minor Outl.Isl.",
    abbreviation: "UM",
    region_id: "12",
  },
  {
    country_id: "138",
    country_name: "Moldavia",
    abbreviation: "MD",
    region_id: "2",
  },
  {
    country_id: "139",
    country_name: "Monaco",
    abbreviation: "MC",
    region_id: "1",
  },
  {
    country_id: "140",
    country_name: "Mongolia",
    abbreviation: "MN",
    region_id: "9",
  },
  {
    country_id: "141",
    country_name: "Montserrat",
    abbreviation: "MS",
    region_id: "11",
  },
  {
    country_id: "142",
    country_name: "Morocco",
    abbreviation: "MA",
    region_id: "4",
  },
  {
    country_id: "143",
    country_name: "Mozambique",
    abbreviation: "MZ",
    region_id: "5",
  },
  {
    country_id: "144",
    country_name: "Myanmar",
    abbreviation: "MM",
    region_id: "8",
  },
  {
    country_id: "146",
    country_name: "Namibia",
    abbreviation: "NA",
    region_id: "6",
  },
  {
    country_id: "147",
    country_name: "Nauru",
    abbreviation: "NR",
    region_id: "8",
  },
  {
    country_id: "148",
    country_name: "Nepal",
    abbreviation: "NP",
    region_id: "8",
  },
  {
    country_id: "149",
    country_name: "Neth. Antilles",
    abbreviation: "AN",
    region_id: "11",
  },
  {
    country_id: "150",
    country_name: "Netherlands",
    abbreviation: "NL",
    region_id: "1",
  },
  {
    country_id: "151",
    country_name: "New Caledonia",
    abbreviation: "NC",
    region_id: "16",
  },
  {
    country_id: "152",
    country_name: "New Zealand",
    abbreviation: "NZ",
    region_id: "16",
  },
  {
    country_id: "153",
    country_name: "Nicaragua",
    abbreviation: "NI",
    region_id: "13",
  },
  {
    country_id: "154",
    country_name: "Niger",
    abbreviation: "NE",
    region_id: "7",
  },
  {
    country_id: "155",
    country_name: "Nigeria",
    abbreviation: "NG",
    region_id: "7",
  },
  {
    country_id: "156",
    country_name: "Niue Islands",
    abbreviation: "NU",
    region_id: "16",
  },
  {
    country_id: "145",
    country_name: "N.Mariana Islnd",
    abbreviation: "MP",
    region_id: "9",
  },
  {
    country_id: "157",
    country_name: "Norfolk Island",
    abbreviation: "NF",
    region_id: "16",
  },
  {
    country_id: "158",
    country_name: "North Korea",
    abbreviation: "KP",
    region_id: "9",
  },
  {
    country_id: "159",
    country_name: "Norway",
    abbreviation: "NO",
    region_id: "1",
  },
  {
    country_id: "160",
    country_name: "Oman",
    abbreviation: "OM",
    region_id: "17",
  },
  {
    country_id: "239",
    country_name: "Pacific Islands",
    abbreviation: "PI",
    region_id: "16",
  },
  {
    country_id: "161",
    country_name: "Pakistan",
    abbreviation: "PK",
    region_id: "10",
  },
  {
    country_id: "162",
    country_name: "Palau",
    abbreviation: "PW",
    region_id: "9",
  },
  {
    country_id: "163",
    country_name: "Panama",
    abbreviation: "PA",
    region_id: "13",
  },
  {
    country_id: "164",
    country_name: "Pap. New Guinea",
    abbreviation: "PG",
    region_id: "8",
  },
  {
    country_id: "165",
    country_name: "Paraguay",
    abbreviation: "PY",
    region_id: "15",
  },
  {
    country_id: "166",
    country_name: "Peru",
    abbreviation: "PE",
    region_id: "15",
  },
  {
    country_id: "167",
    country_name: "Philippines",
    abbreviation: "PH",
    region_id: "8",
  },
  {
    country_id: "168",
    country_name: "Pitcairn Islnds",
    abbreviation: "PN",
    region_id: "16",
  },
  {
    country_id: "169",
    country_name: "Poland",
    abbreviation: "PL",
    region_id: "2",
  },
  {
    country_id: "170",
    country_name: "Portugal",
    abbreviation: "PT",
    region_id: "1",
  },
  {
    country_id: "171",
    country_name: "Puerto Rico",
    abbreviation: "PR",
    region_id: "11",
  },
  {
    country_id: "172",
    country_name: "Qatar",
    abbreviation: "QA",
    region_id: "17",
  },
  {
    country_id: "174",
    country_name: "Romania",
    abbreviation: "RO",
    region_id: "2",
  },
  {
    country_id: "175",
    country_name: "Russian Fed.",
    abbreviation: "RU",
    region_id: "2",
  },
  {
    country_id: "176",
    country_name: "Rwanda",
    abbreviation: "RW",
    region_id: "5",
  },
  {
    country_id: "178",
    country_name: "Samoa - American",
    abbreviation: "AS",
    region_id: "16",
  },
  {
    country_id: "179",
    country_name: "San Marino",
    abbreviation: "SM",
    region_id: "1",
  },
  {
    country_id: "180",
    country_name: "Saudi Arabia",
    abbreviation: "SA",
    region_id: "17",
  },
  {
    country_id: "181",
    country_name: "Senegal",
    abbreviation: "SN",
    region_id: "7",
  },
  {
    country_id: "182",
    country_name: "Seychelles",
    abbreviation: "SC",
    region_id: "5",
  },
  {
    country_id: "183",
    country_name: "Sierra Leone",
    abbreviation: "SL",
    region_id: "7",
  },
  {
    country_id: "184",
    country_name: "Singapore",
    abbreviation: "SG",
    region_id: "8",
  },
  {
    country_id: "185",
    country_name: "Slovakia",
    abbreviation: "SK",
    region_id: "2",
  },
  {
    country_id: "186",
    country_name: "Slovenia",
    abbreviation: "SI",
    region_id: "2",
  },
  {
    country_id: "187",
    country_name: "Solomon Islands",
    abbreviation: "SB",
    region_id: "8",
  },
  {
    country_id: "188",
    country_name: "Somalia",
    abbreviation: "SO",
    region_id: "5",
  },
  {
    country_id: "189",
    country_name: "South Africa",
    abbreviation: "ZA",
    region_id: "6",
  },
  {
    country_id: "190",
    country_name: "South Korea",
    abbreviation: "KR",
    region_id: "9",
  },
  {
    country_id: "191",
    country_name: "Spain",
    abbreviation: "ES",
    region_id: "1",
  },
  {
    country_id: "192",
    country_name: "Sri Lanka",
    abbreviation: "LK",
    region_id: "10",
  },
  {
    country_id: "238",
    country_name: "stateless",
    abbreviation: "STL",
    region_id: "1",
  },
  {
    country_id: "193",
    country_name: "St. Helena",
    abbreviation: "SH",
    region_id: "7",
  },
  {
    country_id: "198",
    country_name: "Sth Sandwich Is",
    abbreviation: "GS",
    region_id: "15",
  },
  {
    country_id: "196",
    country_name: "St.Kitts - Nevis",
    abbreviation: "KN",
    region_id: "11",
  },
  {
    country_id: "194",
    country_name: "St. Lucia",
    abbreviation: "LC",
    region_id: "11",
  },
  {
    country_id: "177",
    country_name: "S.Tome - Principe",
    abbreviation: "ST",
    region_id: "3",
  },
  {
    country_id: "197",
    country_name: "St.Pier - Miquel.",
    abbreviation: "PM",
    region_id: "12",
  },
  {
    country_id: "195",
    country_name: "St. Vincent",
    abbreviation: "VC",
    region_id: "11",
  },
  {
    country_id: "199",
    country_name: "Sudan",
    abbreviation: "SD",
    region_id: "4",
  },
  {
    country_id: "200",
    country_name: "Suriname",
    abbreviation: "SR",
    region_id: "15",
  },
  {
    country_id: "201",
    country_name: "Svalbard",
    abbreviation: "SJ",
    region_id: "1",
  },
  {
    country_id: "202",
    country_name: "Swaziland",
    abbreviation: "SZ",
    region_id: "6",
  },
  {
    country_id: "203",
    country_name: "Sweden",
    abbreviation: "SE",
    region_id: "1",
  },
  {
    country_id: "204",
    country_name: "Switzerland",
    abbreviation: "CH",
    region_id: "1",
  },
  {
    country_id: "205",
    country_name: "Syria",
    abbreviation: "SY",
    region_id: "17",
  },
  {
    country_id: "206",
    country_name: "Tadzhikistan",
    abbreviation: "TJ",
    region_id: "17",
  },
  {
    country_id: "207",
    country_name: "Taiwan",
    abbreviation: "TW",
    region_id: "8",
  },
  {
    country_id: "208",
    country_name: "Tanzania",
    abbreviation: "TZ",
    region_id: "5",
  },
  {
    country_id: "209",
    country_name: "Thailand",
    abbreviation: "TH",
    region_id: "8",
  },
  {
    country_id: "210",
    country_name: "Togo",
    abbreviation: "TG",
    region_id: "7",
  },
  {
    country_id: "211",
    country_name: "Tokelau Islands",
    abbreviation: "TK",
    region_id: "16",
  },
  {
    country_id: "212",
    country_name: "Tonga",
    abbreviation: "TO",
    region_id: "16",
  },
  {
    country_id: "213",
    country_name: "Trinidad - Tobago",
    abbreviation: "TT",
    region_id: "11",
  },
  {
    country_id: "214",
    country_name: "Tunisia",
    abbreviation: "TN",
    region_id: "4",
  },
  {
    country_id: "215",
    country_name: "Turkey",
    abbreviation: "TR",
    region_id: "17",
  },
  {
    country_id: "216",
    country_name: "Turkmenistan",
    abbreviation: "TM",
    region_id: "17",
  },
  {
    country_id: "217",
    country_name: "Turks & Caicos",
    abbreviation: "TC",
    region_id: "11",
  },
  {
    country_id: "218",
    country_name: "Tuvalu",
    abbreviation: "TV",
    region_id: "16",
  },
  {
    country_id: "219",
    country_name: "Uganda",
    abbreviation: "UG",
    region_id: "5",
  },
  {
    country_id: "220",
    country_name: "Ukraine",
    abbreviation: "UA",
    region_id: "2",
  },
  {
    country_id: "224",
    country_name: "United Arab Emirates",
    abbreviation: "AE",
    region_id: "17",
  },
  {
    country_id: "221",
    country_name: "United Kingdom",
    abbreviation: "GB",
    region_id: "1",
  },
  {
    country_id: "222",
    country_name: "United States",
    abbreviation: "US",
    region_id: "12",
  },
  {
    country_id: "223",
    country_name: "Uruguay",
    abbreviation: "UY",
    region_id: "14",
  },
  {
    country_id: "225",
    country_name: "Uzbekistan",
    abbreviation: "UZ",
    region_id: "17",
  },
  {
    country_id: "226",
    country_name: "Vanuatu",
    abbreviation: "VU",
    region_id: "16",
  },
  {
    country_id: "227",
    country_name: "Vatican City",
    abbreviation: "VA",
    region_id: "1",
  },
  {
    country_id: "228",
    country_name: "Venezuela",
    abbreviation: "VE",
    region_id: "15",
  },
  {
    country_id: "229",
    country_name: "Vietnam",
    abbreviation: "VN",
    region_id: "8",
  },
  {
    country_id: "230",
    country_name: "Wallis - Futuna",
    abbreviation: "WF",
    region_id: "16",
  },
  {
    country_id: "232",
    country_name: "Western Samoa",
    abbreviation: "WS",
    region_id: "16",
  },
  {
    country_id: "231",
    country_name: "West Sahara",
    abbreviation: "EH",
    region_id: "4",
  },
  {
    country_id: "233",
    country_name: "Yemen",
    abbreviation: "YE",
    region_id: "17",
  },
  {
    country_id: "234",
    country_name: "Yugoslavia",
    abbreviation: "YU",
    region_id: "2",
  },
  {
    country_id: "235",
    country_name: "Zaire",
    abbreviation: "ZR",
    region_id: "3",
  },
  {
    country_id: "236",
    country_name: "Zambia",
    abbreviation: "ZM",
    region_id: "5",
  },
  {
    country_id: "237",
    country_name: "Zimbabwe",
    abbreviation: "ZW",
    region_id: "5",
  },
];

const Country = ({ route, navigation }) => {
  const [countryCode, setCountryCode] = useState("IN");
  const [country, setCountry] = useState({
    callingCode: ["91"],
    cca2: "IN",
    currency: ["INR"],
    flag: "flag-in",
    name: "India",
    region: "Asia",
    subregion: "Southern Asia",
  });
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);

  //   Start
  const { age, gender, pregnant } = route.params;
  const [check, setCheck] = useState(false);
  const [apiCountries, setApiCountries] = useState(null);
  const [selectError, setSelectError] = useState("");
  const [isabelErrorVar, setIsabelErrorVar] = useState(false);
  const fetchCountries = async () => {
    await fetch(
      "https://apiscsandbox.isabelhealthcare.com/v2/countries?language=english&web_service=json",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Authorization: `${ISABELL_API_KEY}`,
          Authorization: `nIWd9Dad9cJ9PJnrML1B92N4jWu3C76n`,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setApiCountries(res.countries.country);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setCheck(true);
  };
  const handleSubmit = () => {
    console.log("Country BROOOOOOOOOOOOOO");
    console.log(country);
    const newCountryObj = apiCountries?.find(
      (item) => item.country_name === country.name
    );
    console.log(newCountryObj);
    if (check) {
      let newpregnant = "";
      if (pregnant !== undefined) {
        newpregnant = pregnant;
      }
      navigation.navigate("describe", {
        age: age,
        gender: gender,
        pregnant: newpregnant,
        country_id: newCountryObj.country_id,
        region_id: newCountryObj.region_id,
      });
    } else {
      setSelectError("* Select a gender is Required");
    }
  };
  useEffect(() => {
    setTimeout(() => setCheck(true), 1000);
  }, []);
  useEffect(() => {
    const found = isabelCountries.some(
      (el) => el.country_name.toUpperCase() == country.name.toUpperCase()
    );
    if (found) {
      setTimeout(() => setCheck(true), 2000);
      setIsabelErrorVar(false);
    } else {
      setCheck(false);
      setIsabelErrorVar(true);
    }
  }, [country]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerSub}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="ios-arrow-back-sharp"
              size={24}
              color="black"
              style={styles.icon_style}
            />
          </TouchableOpacity>
          <View style={styles.titleConatiner}>
            <Text style={styles.title1}>DR. AI</Text>
          </View>
          <View style={{ width: 30 }}></View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.cardTitle2}>Welcome to the DR. AI</Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginBottom: 20 }}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fcountries.png?alt=media&token=8c1804f5-c46c-4591-9455-ca0f06818a7d",
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.title1}>Select Country</Text>
            <Text style={styles.title2}>
              Please select the country of residance or recently visited
            </Text>
          </View>
          <View style={styles.flagContainer}>
            <View style={styles.flag}>
              <CountryPicker
                {...{
                  countryCode,
                  withFilter,
                  withFlag,
                  withCountryNameButton,
                  withAlphaFilter,
                  withCallingCode,
                  withEmoji,
                  onSelect,
                }}
                visible={false}
              />
            </View>
            <Text style={styles.instructions}>
              Press on the flag to select a country
            </Text>
            {country !== null && (
              <Text style={styles.title1}>{country.name}</Text>
            )}
          </View>
        </View>
        {selectError.length !== 0 ? (
          <Text style={styles.error}>{selectError}</Text>
        ) : null}
        {isabelErrorVar && (
          <Text style={styles.error2}>
            This Country not supported Yet. Try Again
          </Text>
        )}
        {/* Submit */}
        <TouchableOpacity
          style={[styles.button1, !check ? styles.signup1 : styles.signup]}
          onPress={handleSubmit}
          disabled={!check}
        >
          <Text style={styles.signupText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Country;

const styles = StyleSheet.create({
  // Header
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor1,
    paddingTop: 0,
  },
  subContainer: {
    // flex: 1,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.bgColor1,
    height: 60,
    paddingHorizontal: 30,
  },
  logo: {
    width: 30,
    height: 30,
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon_style: {
    marginRight: 10,
  },
  titleConatiner: {
    padding: 5,
  },
  title1: {
    color: COLORS.fontColor4,
    fontSize: 22,
    fontWeight: "bold",
    margin: 0,
    lineHeight: 29,
    textAlign: "center",
  },
  title2: {
    color: COLORS.fontColor2,
    fontSize: 14,
    margin: 0,
    padding: 0,
    lineHeight: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  title3: {
    color: COLORS.fontColor2,
    fontSize: 12,
    textAlign: "center",
  },
  title32: {
    color: COLORS.fontColor3,
    fontSize: 12,
    textAlign: "center",
  },
  //   ScrollView
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.bgColor1,
  },
  cardTitle2: {
    color: COLORS.fontColor2,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80,
  },
  flagContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    marginVertical: 15,
  },
  button1: {
    width: "100%",
    marginVertical: 15,
    marginTop: 120,
    padding: 5,
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  signup1: {
    backgroundColor: COLORS.darkgray,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  signupText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
  },
  error: {
    fontSize: 10,
    color: "red",
    marginBottom: 5,
  },
  error2: {
    textAlign: "center",
    fontSize: 16,
    color: "red",
    marginBottom: 5,
  },
});
